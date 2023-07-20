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
    
    authors() {
      return db.authors
    },
    
    reviews() {
      return db.reviews
    },
   
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

console.log('server running at', process.env.HTTP_SERVER_PORT)