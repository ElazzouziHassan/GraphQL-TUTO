export const typeDefs = `#graphql
   type Book {
    id: ID!
    title: String!
    pages: Int!
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
  }
  type Query {
    books: [Book]
    book(id: ID!): Book
    reviews: [Review]
    review(id: ID!): Review
    authors: [Author]
    author(id: ID!): Author
  }
`