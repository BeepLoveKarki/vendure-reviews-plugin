"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsPlugin = void 0;
const core_1 = require("@vendure/core");
const product_review_entity_1 = require("./entities/product-review.entity");
const api_extensions_1 = require("./graphql/api-extensions");
const product_entity_resolver_1 = require("./graphql/product-entity.resolver");
const product_review_admin_resolver_1 = require("./graphql/product-review-admin.resolver");
const product_review_entity_resolver_1 = require("./graphql/product-review-entity.resolver");
const product_review_shop_resolver_1 = require("./graphql/product-review-shop.resolver");
const path_1 = __importDefault(require("path"));
let ReviewsPlugin = class ReviewsPlugin {
};
ReviewsPlugin.uiExtensions = {
    extensionPath: path_1.default.join(__dirname, 'ui'),
    ngModules: [
        {
            type: 'shared',
            ngModuleFileName: 'reviews-ui-extension.module.ts',
            ngModuleName: 'ReviewsUiExtensionModule',
        },
        {
            type: 'lazy',
            route: 'product-reviews',
            ngModuleFileName: 'reviews-ui-lazy.module.ts',
            ngModuleName: 'ReviewsUiLazyModule',
        },
    ],
};
ReviewsPlugin = __decorate([
    core_1.VendurePlugin({
        imports: [core_1.PluginCommonModule],
        entities: [product_review_entity_1.ProductReview],
        adminApiExtensions: {
            schema: api_extensions_1.adminApiExtensions,
            resolvers: [product_entity_resolver_1.ProductEntityResolver, product_review_admin_resolver_1.ProductReviewAdminResolver, product_review_entity_resolver_1.ProductReviewEntityResolver],
        },
        shopApiExtensions: {
            schema: api_extensions_1.shopApiExtensions,
            resolvers: [product_entity_resolver_1.ProductEntityResolver, product_review_shop_resolver_1.ProductReviewShopResolver, product_review_entity_resolver_1.ProductReviewEntityResolver],
        },
        configuration: config => {
            config.customFields.Product.push({
                name: 'reviewRating',
                public: true,
                nullable: true,
                type: 'float',
            });
            config.customFields.Product.push({
                name: 'reviewCount',
                public: true,
                defaultValue: 0,
                type: 'float',
            });
            return config;
        },
    })
], ReviewsPlugin);
exports.ReviewsPlugin = ReviewsPlugin;
//# sourceMappingURL=reviews-plugin.js.map