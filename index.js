const express = require('express');
const PORT = 3000;
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/drivers-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', error => console.log('An error occured, ', error));
db.once('open', () => console.log('Connected to the database drivers-app'));

app.use(express.json());

const vehicleRouter = require('./routes/vehicles');
app.use('/vehicles', vehicleRouter);

const driverRouter = require('./routes/drivers');
app.use('/drivers', driverRouter);

app.listen(PORT, () => {
  console.log(`The server is listening in ${PORT}`);
});
