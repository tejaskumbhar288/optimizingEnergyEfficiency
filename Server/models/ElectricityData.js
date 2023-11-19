const mongoose = require('mongoose');

const electricityDataSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  consumption: {
    type: Number,
    required: true,
  },
});

const ElectricityData = mongoose.model('ElectricityData', electricityDataSchema, 'electricitydatas');

module.exports = ElectricityData;
