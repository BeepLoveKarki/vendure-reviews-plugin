import { ListQueryBuilder, RequestContext, TransactionalConnection } from '@vendure/core';
import { ProductReview } from '../entities/product-review.entity';
import { MutationSubmitProductReviewArgs, MutationVoteOnReviewArgs } from '../generated-shop-types';
export declare class ProductReviewShopResolver {
    private connection;
    private listQueryBuilder;
    constructor(connection: TransactionalConnection, listQueryBuilder: ListQueryBuilder);
    submitProductReview(ctx: RequestContext, { input }: MutationSubmitProductReviewArgs): Promise<ProductReview>;
    voteOnReview(ctx: RequestContext, { id, vote }: MutationVoteOnReviewArgs): Promise<ProductReview>;
}
