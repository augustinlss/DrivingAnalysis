const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    lastKnownLocationLat: Number,
    lastKnownLocationLong: Number,
    distanceDrivenPol: Number,
    distanceDrivenNPol: Number,
    emissionsPM: Array,
});

const User = mongoose.model('userData', userSchema);
module.exports = User;