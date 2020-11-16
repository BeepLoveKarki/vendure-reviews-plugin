"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductReviewShopResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_1 = require("@vendure/core");
const product_review_entity_1 = require("../entities/product-review.entity");
let ProductReviewShopResolver = class ProductReviewShopResolver {
    constructor(connection, listQueryBuilder) {
        this.connection = connection;
        this.listQueryBuilder = listQueryBuilder;
    }
    async submitProductReview(ctx, { input }) {
        const review = new product_review_entity_1.ProductReview(input);
        const product = await this.connection.getEntityOrThrow(ctx, core_1.Product, input.productId);
        review.product = product;
        review.state = 'new';
        if (input.variantId) {
            const variant = await this.connection.getEntityOrThrow(ctx, core_1.ProductVariant, input.variantId);
            review.productVariant = variant;
        }
        if (input.customerId) {
            const customer = await this.connection.getEntityOrThrow(ctx, core_1.Customer, input.customerId);
            review.author = customer;
        }
        return this.connection.getRepository(ctx, product_review_entity_1.ProductReview).save(review);
    }
    async voteOnReview(ctx, { id, vote }) {
        const review = await this.connection.getEntityOrThrow(ctx, product_review_entity_1.ProductReview, id, {
            relations: ['product'],
            where: {
                state: 'approved',
            },
        });
        if (vote) {
            review.upvotes++;
        }
        else {
            review.downvotes++;
        }
        return this.connection.getRepository(ctx, product_review_entity_1.ProductReview).save(review);
    }
};
__decorate([
    core_1.Transaction(),
    graphql_1.Mutation(),
    __param(0, core_1.Ctx()),
    __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewShopResolver.prototype, "submitProductReview", null);
__decorate([
    core_1.Transaction(),
    graphql_1.Mutation(),
    __param(0, core_1.Ctx()), __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewShopResolver.prototype, "voteOnReview", null);
ProductReviewShopResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [core_1.TransactionalConnection, core_1.ListQueryBuilder])
], ProductReviewShopResolver);
exports.ProductReviewShopResolver = ProductReviewShopResolver;
//# sourceMappingURL=product-review-shop.resolver.js.map