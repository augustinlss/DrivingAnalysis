const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    lastKnownLocation: Array,
    distanceDrivenPol: Number,
    distanceDrivenNPol: Number,
    emissionsPM: Array,
});

const User = mongoose.model('userData', userSchema);
module.exports = User;