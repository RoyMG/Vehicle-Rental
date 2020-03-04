const Driver = require('../models/driver');

module.exports.getAllDrivers = async (req, res) => {
  try {
    const driver = await Driver.find();
    res.json(driver);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.insertNewDriver = async (req, res) => {
  const driver = new Driver(req.body);

  try {
    const newDriver = await driver.save();
    res.status(201).json(newDriver);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//Get by id
module.exports.getOneDriver = async (req, res) => {
  res.json(res.driver);
};

//Delete
module.exports.deleteDriver = async (req, res) => {
  try {
    await res.driver.remove();
    res.json({ message: 'deleted driver' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Put
module.exports.updateDriver = async (req, res) => {
  try {
    await Driver.updateOne({ id: req.params.id }, req.body);
    res.json({ message: 'Document was updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
