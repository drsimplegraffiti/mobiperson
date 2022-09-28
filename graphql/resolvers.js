const { UserInputError } = require('apollo-server');
const fs = require('fs');
const Person = require('../models/person.model');

//resolver
const resolvers = {
  Query: {
    // Query for all persons---> GET request for all persons
    persons: async () => {
      try {
        const persons = await Person.find();

        if (!persons) {
          throw new Error('No persons found');
        }
        // export persons to json file
        fs.writeFile('persons.json', JSON.stringify(persons), (err) => {
          if (err) throw err;
          console.log('The file has been saved!');
        });

        const { Parser } = require('json2csv');
        // export to csv file
        const fields = ['name', 'age', 'employed', 'gpa'];
        const opts = { fields };

        const parse = new Parser(opts);
        const csv = parse.parse(persons);

        fs.writeFile('persons.csv', csv, (err) => {
          if (err) throw err;
          console.log('The file has been saved!');
        });

        return persons;
      } catch (err) {
        throw new Error(err);
      }
    },

    // Get single person by id---> GET request for single person
    person: async (parent, args) => {
      try {
        const person = await Person.findById(args.id);

        if (!person) {
          throw new Error('No person found');
        }

        return person;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    addPerson: async (parent, args) => {
      // args is an object that contains the arguments passed in the mutation i.e req.body in a REST API express
      try {
        if (!(args.name || args.age || args.employed || args.gpa)) {
          throw new UserInputError('All fields are required', {
            errors: {
              name: 'Name is required',
              age: 'Age is required',
              employed: 'Employed is required',
              gpa: 'GPA is required',
            },
          });
        }
        const person = await Person.create(args);
        return person;
      } catch (err) {
        throw new Error(err);
      }
    },

    updatePerson: async (parent, args) => {
      try {
        const { id, name, age, employed, gpa } = args;
        const person = await Person.findByIdAndUpdate(
          id,
          { name, age, employed, gpa },
          { new: true }
        );

        if (!person) {
          throw new Error('No person found');
        }

        return person;
      } catch (err) {
        throw new Error(err);
      }
    },
    deletePerson: async (parent, args) => {
      try {
        const person = await Person.findByIdAndDelete(args.id); // args.id is the id passed in the mutation

        if (!person) {
          throw new Error('No person found');
        }

        return person;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
module.exports = resolvers;
