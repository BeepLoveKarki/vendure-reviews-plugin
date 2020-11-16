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
exports.ProductEntityResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_1 = require("@vendure/core");
const product_review_entity_1 = require("../entities/product-review.entity");
let ProductEntityResolver = class ProductEntityResolver {
    constructor(listQueryBuilder, connection) {
        this.listQueryBuilder = listQueryBuilder;
        this.connection = connection;
    }
    reviews(apiType, product, args) {
        return this.listQueryBuilder
            .build(product_review_entity_1.ProductReview, args.options || undefined, {
            where: Object.assign({ product }, (apiType === 'shop' ? { state: 'approved' } : {})),
            relations: ['product', 'product.featuredAsset'],
        })
            .getManyAndCount()
            .then(([items, totalItems]) => ({
            items,
            totalItems,
        }));
    }
    reviewsHistogram(product) {
        return this.connection
            .rawConnection
            .createQueryBuilder()
            .select('ROUND(`rating`)', 'bin')
            .addSelect('COUNT(*)', 'frequency')
            .from(product_review_entity_1.ProductReview, 'review')
            .where('review.product = :productId', { productId: product.id })
            .andWhere('review.state = :state', { state: 'approved' })
            .groupBy('ROUND(`rating`)')
            .getRawMany();
    }
};
__decorate([
    graphql_1.ResolveField(),
    __param(0, core_1.Api()), __param(1, graphql_1.Parent()), __param(2, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, core_1.Product, Object]),
    __metadata("design:returntype", void 0)
], ProductEntityResolver.prototype, "reviews", null);
__decorate([
    graphql_1.ResolveField(),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.Product]),
    __metadata("design:returntype", void 0)
], ProductEntityResolver.prototype, "reviewsHistogram", null);
ProductEntityResolver = __decorate([
    graphql_1.Resolver('Product'),
    __metadata("design:paramtypes", [core_1.ListQueryBuilder, core_1.TransactionalConnection])
], ProductEntityResolver);
exports.ProductEntityResolver = ProductEntityResolver;
//# sourceMappingURL=product-entity.resolver.js.map