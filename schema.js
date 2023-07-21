export const typeDefs = `#graphql
   type Book {
    id: ID!
    title: String!
    pages: Int!
    reviews: [Review!]
    author: Author!
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    author: Author!
    book: Book!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }
  type Query {
    books: [Book]
    book(id: ID!): Book
    reviews: [Review]
    review(id: ID!): Review
    authors: [Author]
    author(id: ID!): Author
  }
  type Mutation {
    deleteBook(id: ID!): [Book]
    addBook(book: AddBookInput!): Book
    updateBook(id: ID!, updates: updateBookInput): Book
  }
  input AddBookInput {
    title: String!,
    pages: Int!
  }
  input updateBookInput {
    title: String,
    pages: Int
  }
`