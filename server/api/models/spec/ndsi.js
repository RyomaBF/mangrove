const mongoose = require('mongoose');
const Spec = require('./spec');

module.exports = Spec.discriminator('ndsiSpec', new mongoose.Schema({
  fftW: { type: Number, min: 1, default: 10 },
  anthroMin: { type: Number, min: 0, default: 5001 },
  anthroMax: { type: Number, min: 0, default: 20000 },
  bioMin: { type: Number, min: 0, default: 0 },
  bioMax: { type: Number, min: 0, default: 5000 },
}));