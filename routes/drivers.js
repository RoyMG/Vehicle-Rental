const express = require('express');
const router = express.Router();
const Driver = require('../models/driver');
const Vehicle = require('../models/vehicle');
const {
  getAllDrivers,
  insertNewDriver,
  getOneDriver,
  deleteDriver,
  updateDriver
} = require('../controllers/drivers');

const { getAllVehicles, insertNewVehicle } = require('../controllers/vehicle');

//Get
router.get('/', getAllDrivers);

//Insert
router.post('/', insertNewDriver);

//Find by id
async function getDriver(req, res, next) {
  try {
    driver = await Driver.findOne({ id: req.params.id });
    if (driver === null) {
      return res.status(400).json({
        message: `There isn't a driver with the id: ${req.params.id}`
      });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.driver = driver;
  next();
}

router.get('/vehicle', async (req, res) => {
  try {
    const vehicle = await Vehicle.find();
    res.json(vehicle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get by id
router.get('/:id', getDriver, getOneDriver);

//Delete
router.delete('/:id', getDriver, deleteDriver);

//Put
router.put('/:id', updateDriver);

router.get('/:id/vehicle', getDriver, async (req, res) => {
  res.json(res.driver.vehicles);
});

module.exports = router;
