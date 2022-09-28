const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  age: {
    type: Number,
    required: [true, 'Please provide an age'],
  },
  employed: {
    type: Boolean,
    required: [true, 'Employment status is required'],
  },
  gpa: {
    type: Number,
    required: [true, 'GPA is required'],
  },
});

module.exports = mongoose.model('Person', PersonSchema);
