import { Customer, DeepPartial, Product, ProductVariant, VendureEntity } from '@vendure/core';
import { ReviewState } from '../types';
export declare class ProductReview extends VendureEntity {
    constructor(input?: DeepPartial<ProductReview>);
    product: Product;
    productVariant: ProductVariant | null;
    summary: string;
    body: string;
    rating: number;
    author: Customer;
    authorName: string;
    authorLocation: string;
    upvotes: number;
    downvotes: number;
    state: ReviewState;
    response: string;
    responseCreatedAt: Date;
}
