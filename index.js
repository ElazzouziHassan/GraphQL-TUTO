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
  },
  Book: {
    reviews(parent) {
      return db.reviews.filter((r) => r.bookId === parent.id)
    },
    author(parent) {
      return db.authors.filter( a => a.id === parent.authorId)
    }
  },
  Review: {
    author(parent) {
      return db.authors.find((a) => a.id === parent.authorId)
    },
    book(parent) {
      return db.books.find((b) => b.id === parent.bookId)
    }
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((r) => r.authorId === parent.id)
    }
  },
  Mutation: {
    deleteBook(_, args) {
      db.books = db.books.filter((b) => b.id !== args.id)
      return db.books
    },
    addBook(_, args) {
      let book = {
        ...args.book, 
        id: Math.floor(Math.random() * 10).toString()
      }
      db.books.push(book)

      return book
    },
    updateBook(_, args) {
      db.books = db.books.map((b) => {
        if (b.id === args.id) {
          return {...b, ...args.updates}
        }
        return b
      })
      return db.books.find((b) => b.id === args.id)
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