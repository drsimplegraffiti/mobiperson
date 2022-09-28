require('dotenv').config();

// Import the apollo-server library
const { ApolloServer, UserInputError } = require('apollo-server');
const connectDB = require('./config/db');

const defTypes = require('./graphql/def'); // import typeDefs, Query and Mutation
const resolvers = require('./graphql/resolvers'); // import resolvers

connectDB();

// The ApolloServer constructor requires two parameters: typeDefs and resolvers
const server = new ApolloServer({
  typeDefs: defTypes,
  resolvers,
});

const port = process.env.PORT || 5000;

// Start the server
server.listen(port).then(({ url }) => {
  console.log(`Server started at ${url}`);
});
