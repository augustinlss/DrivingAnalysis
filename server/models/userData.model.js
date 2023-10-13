const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    car: String,
    trip: {
        name: String,
        start_time: Date,
        end_time: Date,
        distance: Number,
        average_speed: Number,
        route: [
        {
            timestamp: Date,
            latitude: Number,
            longitude: Number,
            speed: Number,
        },
        ],
    },
});

const User = mongoose.model('userData', userSchema);
module.exports = User;