const { gql } = require('apollo-server');

// Create a schema ==> typeDefs, Query and Mutation
const defTypes = gql`
  type Person { # type Person is like a class or a mongoose Schema in mongodb
    id: ID! # ! means required
    name: String!
    age: Int!
    employed: Boolean!
    gpa: Float
  }

  # Root Query performs read operations
  type Query {
    persons: [Person!]!
    person(id: ID!): Person
  }

  # Root Mutation performs write operations
  type Mutation {
    addPerson(name: String!, age: Int!, employed: Boolean!, gpa: Float): Person!
    updatePerson(
      id: ID!
      name: String!
      age: Int! # ! means age required
      employed: Boolean! # ! means employed status is required
      gpa: Float # gpa is optional
    ): Person!
    deletePerson(id: ID!): Person!
  }
`;

module.exports = defTypes;
