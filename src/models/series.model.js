let mongoose = require('mongoose');

let seriesSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    program: {
        type: mongoose.Types.ObjectId,
        ref: 'Program',
        required: true
    },
    exercises: {
        type: [mongoose.Types.ObjectId],
        ref: 'Exercise'
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Series', seriesSchema);