"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopApiExtensions = exports.adminApiExtensions = exports.commonApiExtensions = void 0;
const apollo_server_core_1 = require("apollo-server-core");
exports.commonApiExtensions = apollo_server_core_1.gql `
    type ProductReview implements Node {
        id: ID!
        createdAt: DateTime!
        updatedAt: DateTime!
        product: Product!
        productVariant: ProductVariant
        summary: String!
        body: String
        rating: Float!
        author: Customer
        authorName: String!
        authorLocation: String
        upvotes: Int!
        downvotes: Int!
        state: String!
        response: String
        responseCreatedAt: DateTime
    }

    type ProductReviewList implements PaginatedList {
        items: [ProductReview!]!
        totalItems: Int!
    }

    type ProductReviewHistogramItem {
        bin: Int!
        frequency: Int!
    }

    extend type Product {
        reviews(options: ProductReviewListOptions): ProductReviewList!
        reviewsHistogram: [ProductReviewHistogramItem!]!
    }

    # Auto-generated at runtime
    input ProductReviewListOptions
`;
exports.adminApiExtensions = apollo_server_core_1.gql `
    ${exports.commonApiExtensions}

    input UpdateProductReviewInput {
        id: ID!
        summary: String
        body: String
        response: String
    }

    extend type Query {
        productReviews(options: ProductReviewListOptions): ProductReviewList!
        productReview(id: ID!): ProductReview
    }

    extend type Mutation {
        updateProductReview(input: UpdateProductReviewInput!): ProductReview!
        approveProductReview(id: ID!): ProductReview
        rejectProductReview(id: ID!): ProductReview
    }
`;
exports.shopApiExtensions = apollo_server_core_1.gql `
    ${exports.commonApiExtensions}

    input SubmitProductReviewInput {
        productId: ID!
        variantId: ID
        customerId: ID
        summary: String!
        body: String!
        rating: Float!
        authorName: String!
        authorLocation: String
    }

    extend type Mutation {
        submitProductReview(input: SubmitProductReviewInput!): ProductReview!
        voteOnReview(id: ID!, vote: Boolean!): ProductReview!
    }
`;
//# sourceMappingURL=api-extensions.js.map