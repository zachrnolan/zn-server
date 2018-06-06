const express = require('express')
const { ApolloServer, gql } = require('apollo-server')
const { registerServer } = require('apollo-server-express')

const projects = [
  {
    name: 'Stardust',
    teaser: 'Share reactions and discover amazing new movies and TV shows. Available for iOS and Android.',
    description: 'Instead of the typical text-driven reviews found on blogs and other social media, what if there was a place that was driven by video reactions? What if users could record themselves expressing their real feelings, tagged with their rating of actual movies and TV episodes? Stardust is the only app that is centered around real-time TV and show reactions from people all over the world.',
    imageUrl: 'http://principe.la/wp-content/uploads/2017/04/Stardust-Home@2x.jpg',
    keywords: [
      {
        name: 'React Native',
        sort: 0,
      },
      {
        name: 'NodeJS API',
        sort: 1,
      },
    ],
  },
  {
    name: 'Astra',
    teaser: 'Astra is mission control for your finances.',
    description: 'Astra is mission control for your finances long description.',
    imageUrl: 'http://principe.la/wp-content/uploads/2017/04/Stardust-Home@2x.jpg',
    keywords: [
      {
        name: 'React Native',
        sort: 0,
      },
      {
        name: 'Plaid Integration',
        sort: 1,
      },
    ],
  },
]

const typeDefs = gql`
  type Keyword {
    name: String,
    sort: Int
  }

  type Project {
    name: String,
    teaser: String,
    description: String,
    imageUrl: String,
    keywords: [Keyword]
  }

  type Query {
    projects: [Project]
  }
`

const resolvers = {
  Query: {
    projects: () => projects,
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()

const cors = { origin: 'http://localhost:3000' }

registerServer({ server, app, cors })

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
