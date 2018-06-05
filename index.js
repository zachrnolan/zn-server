const { ApolloServer, gql } = require('apollo-server')

const projects = [
  {
    name: 'Stardust',
    teaser: 'Share reactions and discover amazing new movies and TV shows. Available for iOS and Android.',
  },
  {
    name: 'Astra',
    teaser: 'Astra is mission control for your finances.',
  },
]

const typeDefs = gql`
  type Project {
    name: String,
    teaser: String
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

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
