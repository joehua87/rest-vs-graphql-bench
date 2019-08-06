import { ApolloServer, gql } from 'apollo-server-express'

import { models } from './db'

const typeDefs = gql`
  type Post {
    title: String
    description: String
    body: String
    tags: [String]
  }
  type Query {
    hello: String
    posts: [Post]
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    posts: async () => {
      const posts = await models.Post.find().lean()
      return posts
    },
  },
}

export const apolloServer = new ApolloServer({ typeDefs, resolvers })
