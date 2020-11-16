import { ApiType, ListQueryBuilder, Product, TransactionalConnection } from '@vendure/core';
import { ProductReview } from '../entities/product-review.entity';
import { ProductReviewsArgs } from '../generated-shop-types';
export declare class ProductEntityResolver {
    private listQueryBuilder;
    private connection;
    constructor(listQueryBuilder: ListQueryBuilder, connection: TransactionalConnection);
    reviews(apiType: ApiType, product: Product, args: ProductReviewsArgs): Promise<{
        items: ProductReview[];
        totalItems: number;
    }>;
    reviewsHistogram(product: Product): Promise<any[]>;
}
