const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  vehicleAvailable: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
