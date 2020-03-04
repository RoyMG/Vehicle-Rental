const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  driverLicense: {
    type: String,
    required: true
  },
  vehicles: {
    type: Array
  }
});

module.exports = mongoose.model('Driver', driverSchema);
