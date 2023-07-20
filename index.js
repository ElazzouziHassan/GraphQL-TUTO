import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import dotenv from 'dotenv'

// IMPORTING TYPES & DB : -------------
import { typeDefs } from './schema.js';
import db from './_db.js'
// ------------------------------------

dotenv.config();

// RESOLVERS : --------------------------------------------------
const resolvers = {
  Query: {
    books() {
      return db.books
    },
    
    book(_, args) {
      return db.books.find((book) => book.id === args.id)
    },
    authors() {
      return db.authors
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id)
    },
    reviews() {
      return db.reviews
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id)
    }
   
  }
}
// --------------------------------------------------------------

// SERVER : -----------------------------------------------------
const server = new ApolloServer({
  typeDefs,
  resolvers
})
// --------------------------------------------------------------

const { url } = await startStandaloneServer(server, {
  listen: {port: process.env.HTTP_SERVER_PORT}
})

console.log(`server running at url: http://localhost:${process.env.HTTP_SERVER_PORT}`)