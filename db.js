//import uuid
const { v4: uuidv4 } = require('uuid');

// Create a dummy data
const persons = [
  {
    id: uuidv4(),
    name: 'John Doe',
    age: 35,
    employed: true,
    gpa: 3.6,
  },
  {
    id: uuidv4(),
    name: 'Jane Doe',
    age: 32,
    employed: true,
    gpa: 3.8,
  },
  {
    id: uuidv4(),
    name: 'Jack Doe',
    age: 2,
    employed: false,
    gpa: null,
  },
];

module.exports = persons;
