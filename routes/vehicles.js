const express = require('express');
const router = express.Router();
const Vehicle = require('../models/vehicle');
const { getAllVehicles, insertNewVehicle } = require('../controllers/vehicle');

//Get
router.get('/', getAllVehicles);

//Insert
router.post('/', insertNewVehicle);

module.exports = router;
