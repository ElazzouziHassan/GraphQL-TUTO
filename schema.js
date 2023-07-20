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
    reviews: [Review]
    authors: [Author]
  }
`