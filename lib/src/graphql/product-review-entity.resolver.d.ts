import { Product, ProductVariant, RequestContext, TransactionalConnection } from '@vendure/core';
import { ProductReview } from '../entities/product-review.entity';
export declare class ProductReviewEntityResolver {
    private connection;
    constructor(connection: TransactionalConnection);
    product(review: ProductReview, ctx: RequestContext): Promise<import("@vendure/core").Translated<Product> | undefined>;
    productVariant(review: ProductReview, ctx: RequestContext): Promise<import("@vendure/core").Translated<ProductVariant> | undefined>;
}
