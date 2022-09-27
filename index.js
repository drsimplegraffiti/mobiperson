const { ApolloServer } = require('apollo-server');

const defTypes = require('./graphql/def'); // import typeDefs, Query and Mutation
const resolvers = require('./graphql/resolvers'); // import resolvers

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs: defTypes,
  resolvers,
});

const port = process.env.PORT || 5000;

// Start the server
server.listen(port).then(({ url }) => {
  console.log(`Server started at ${url}`);
});
