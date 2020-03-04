const Vehicle = require('../models/vehicle');

//Get
module.exports.getAllVehicles = async (req, res) => {
  try {
    const vehicle = await Vehicle.find();
    res.json(vehicle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Insert
module.exports.insertNewVehicle = async (req, res) => {
  const vehicle = new Vehicle(req.body);

  try {
    const newVehicle = await vehicle.save();
    res.status(201).json(newVehicle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
