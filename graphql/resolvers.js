const persons = require('../db'); // in graphql we three root mutations

// Create resolvers
const resolvers = {
  Query: {
    persons: () => persons, // return all persons
    person: (parent, args) => {
      // args is like req.body in express
      return persons.find((person) => person.id === args.id);
    },
  },
  Mutation: {
    addPerson: (parent, args) => {
      const person = {
        id: uuidv4(),
        name: args.name,
        age: args.age,
        employed: args.employed,
        gpa: args.gpa,
      };
      persons.push(person);
      // write in a file

      return person;
    },
    updatePerson: (parent, args) => {
      const person = persons.find((person) => person.id === args.id);
      if (!person) {
        throw new Error('Person not found');
      }
      person.name = args.name;
      person.age = args.age;
      person.employed = args.employed;
      person.gpa = args.gpa;
      return person;
    },
    deletePerson: (parent, args) => {
      // find the index of the person in the array of persons i.e object 1 == index 0 and so on
      const personIndex = persons.findIndex((person) => person.id === args.id);
      if (personIndex === -1) {
        // this condition will return false value
        throw new Error('Person not found');
      }
      const deletedPersons = persons.splice(personIndex, 1);
      return deletedPersons[0];
    },
  },
};

module.exports = resolvers;
