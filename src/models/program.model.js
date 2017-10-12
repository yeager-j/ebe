let mongoose = require('mongoose');

let programSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    week: {
        type: mongoose.Types.ObjectId,
        ref: 'Week',
        required: true
    },
    series: {
        type: [mongoose.Types.ObjectId],
        ref: 'Series',
        default: []
    },
    day: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Program', programSchema);