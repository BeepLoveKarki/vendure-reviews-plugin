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
exports.ProductReviewEntityResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_1 = require("@vendure/core");
const product_review_entity_1 = require("../entities/product-review.entity");
let ProductReviewEntityResolver = class ProductReviewEntityResolver {
    constructor(connection) {
        this.connection = connection;
    }
    async product(review, ctx) {
        let product = review.product;
        if (!product) {
            const reviewWithProduct = await this.connection
                .getRepository(ctx, product_review_entity_1.ProductReview)
                .findOne(review.id, {
                relations: ['product'],
            });
            if (reviewWithProduct) {
                product = reviewWithProduct.product;
            }
        }
        if (product) {
            return core_1.translateDeep(product, ctx.languageCode);
        }
    }
    async productVariant(review, ctx) {
        let productVariant = review.productVariant;
        if (!productVariant) {
            const reviewWithProductVariant = await this.connection
                .getRepository(ctx, product_review_entity_1.ProductReview)
                .findOne(review.id, {
                relations: ['productVariant'],
            });
            if (reviewWithProductVariant) {
                productVariant = reviewWithProductVariant.productVariant;
            }
        }
        if (productVariant) {
            return core_1.translateDeep(productVariant, ctx.languageCode);
        }
    }
};
__decorate([
    graphql_1.ResolveField(),
    __param(0, graphql_1.Parent()), __param(1, core_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_review_entity_1.ProductReview, core_1.RequestContext]),
    __metadata("design:returntype", Promise)
], ProductReviewEntityResolver.prototype, "product", null);
__decorate([
    graphql_1.ResolveField(),
    __param(0, graphql_1.Parent()), __param(1, core_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_review_entity_1.ProductReview, core_1.RequestContext]),
    __metadata("design:returntype", Promise)
], ProductReviewEntityResolver.prototype, "productVariant", null);
ProductReviewEntityResolver = __decorate([
    graphql_1.Resolver('ProductReview'),
    __metadata("design:paramtypes", [core_1.TransactionalConnection])
], ProductReviewEntityResolver);
exports.ProductReviewEntityResolver = ProductReviewEntityResolver;
//# sourceMappingURL=product-review-entity.resolver.js.map