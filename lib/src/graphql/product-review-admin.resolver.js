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
exports.ProductReviewAdminResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_1 = require("@vendure/core");
const product_review_entity_1 = require("../entities/product-review.entity");
let ProductReviewAdminResolver = class ProductReviewAdminResolver {
    constructor(connection, listQueryBuilder) {
        this.connection = connection;
        this.listQueryBuilder = listQueryBuilder;
    }
    async productReviews(ctx, args) {
        return this.listQueryBuilder
            .build(product_review_entity_1.ProductReview, args.options || undefined, {
            relations: ['product'],
            ctx,
        })
            .getManyAndCount()
            .then(([items, totalItems]) => ({
            items,
            totalItems,
        }));
    }
    async productReview(ctx, args) {
        return this.connection.getRepository(ctx, product_review_entity_1.ProductReview).findOne(args.id, {
            relations: ['author', 'product', 'productVariant'],
        });
    }
    async updateProductReview(ctx, { input }) {
        const review = await this.connection.getEntityOrThrow(ctx, product_review_entity_1.ProductReview, input.id);
        const originalResponse = review.response;
        const updatedShippingMethod = core_1.patchEntity(review, input);
        if (input.response !== originalResponse) {
            updatedShippingMethod.responseCreatedAt = new Date();
        }
        return this.connection.getRepository(ctx, product_review_entity_1.ProductReview).save(updatedShippingMethod);
    }
    async approveProductReview(ctx, { id }) {
        const review = await this.connection.getEntityOrThrow(ctx, product_review_entity_1.ProductReview, id, { relations: ['product'] });
        if (review.state !== 'new') {
            return review;
        }
        const { product } = review;
        const newRating = this.calculateNewReviewAverage(review.rating, product);
        product.customFields.reviewCount++;
        product.customFields.reviewRating = newRating;
        await this.connection.getRepository(ctx, core_1.Product).save(product);
        review.state = 'approved';
        return this.connection.getRepository(ctx, product_review_entity_1.ProductReview).save(review);
    }
    async rejectProductReview(ctx, { id }) {
        const review = await this.connection.getEntityOrThrow(ctx, product_review_entity_1.ProductReview, id);
        if (review.state !== 'new') {
            return review;
        }
        review.state = 'rejected';
        return this.connection.getRepository(ctx, product_review_entity_1.ProductReview).save(review);
    }
    calculateNewReviewAverage(rating, product) {
        const count = product.customFields.reviewCount;
        const currentRating = product.customFields.reviewRating || 0;
        const newRating = (currentRating * count + rating) / (count + 1);
        return newRating;
    }
};
__decorate([
    graphql_1.Query(),
    core_1.Allow(core_1.Permission.ReadCatalog),
    __param(0, core_1.Ctx()), __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewAdminResolver.prototype, "productReviews", null);
__decorate([
    graphql_1.Query(),
    core_1.Allow(core_1.Permission.ReadCatalog),
    __param(0, core_1.Ctx()), __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewAdminResolver.prototype, "productReview", null);
__decorate([
    core_1.Transaction(),
    graphql_1.Mutation(),
    core_1.Allow(core_1.Permission.UpdateCatalog),
    __param(0, core_1.Ctx()),
    __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewAdminResolver.prototype, "updateProductReview", null);
__decorate([
    core_1.Transaction(),
    graphql_1.Mutation(),
    core_1.Allow(core_1.Permission.UpdateCatalog),
    __param(0, core_1.Ctx()), __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewAdminResolver.prototype, "approveProductReview", null);
__decorate([
    core_1.Transaction(),
    graphql_1.Mutation(),
    core_1.Allow(core_1.Permission.UpdateCatalog),
    __param(0, core_1.Ctx()), __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewAdminResolver.prototype, "rejectProductReview", null);
ProductReviewAdminResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [core_1.TransactionalConnection, core_1.ListQueryBuilder])
], ProductReviewAdminResolver);
exports.ProductReviewAdminResolver = ProductReviewAdminResolver;
//# sourceMappingURL=product-review-admin.resolver.js.map