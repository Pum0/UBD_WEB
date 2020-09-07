const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const RideInfoSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    totalRideDis: {
        type: String,
    },

    totalRideTime: {
        type: String,
    },

    speedAvg: {
        type: String,
    },

    kcal: {
        type: String,
    },

    latitude: {
        type: Array,
        default: []
    },

    longitude: {
        type: Array,
        default: []
    },

    created: {
        type: Date,
        default: moment()
    }


})

const RideInfo = mongoose.model('RideInfo', RideInfoSchema);

module.exports = { RideInfo }