import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import dotenv from 'dotenv'

// IMPORTING TYPES : ------------------
import { typeDefs } from './schema.js';
// ------------------------------------

dotenv.config();

// RESOLVERS : --------------------------------------------------
const resolvers = {
  Query: {
    games() {
      return db.games
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id)
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
  // resolvers
})
// --------------------------------------------------------------

const { url } = await startStandaloneServer(server, {
  listen: {port: process.env.HTTP_SERVER_PORT}
})

console.log('server running at', process.env.HTTP_SERVER_PORT)