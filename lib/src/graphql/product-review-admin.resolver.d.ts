import { ListQueryBuilder, RequestContext, TransactionalConnection } from '@vendure/core';
import { ProductReview } from '../entities/product-review.entity';
import { MutationApproveProductReviewArgs, MutationRejectProductReviewArgs, MutationUpdateProductReviewArgs, QueryProductReviewArgs, QueryProductReviewsArgs } from '../generated-admin-types';
export declare class ProductReviewAdminResolver {
    private connection;
    private listQueryBuilder;
    constructor(connection: TransactionalConnection, listQueryBuilder: ListQueryBuilder);
    productReviews(ctx: RequestContext, args: QueryProductReviewsArgs): Promise<{
        items: ProductReview[];
        totalItems: number;
    }>;
    productReview(ctx: RequestContext, args: QueryProductReviewArgs): Promise<ProductReview | undefined>;
    updateProductReview(ctx: RequestContext, { input }: MutationUpdateProductReviewArgs): Promise<ProductReview>;
    approveProductReview(ctx: RequestContext, { id }: MutationApproveProductReviewArgs): Promise<ProductReview>;
    rejectProductReview(ctx: RequestContext, { id }: MutationRejectProductReviewArgs): Promise<ProductReview>;
    private calculateNewReviewAverage;
}
