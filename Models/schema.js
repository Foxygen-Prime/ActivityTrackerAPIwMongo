const mongoose = require('mongoose');

const personalActivitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    required: true,
  },
  stepsInMiles: {
    type: Number,
    required: true,
  }
});

const personalActivityDB = mongoose.model('personalActivityDB', personalActivitySchema);

module.exports = personalActivityDB;
