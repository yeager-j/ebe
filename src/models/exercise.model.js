let mongoose = require('mongoose');

let exerciseSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    program: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    template: {
        type: mongoose.Types.ObjectId,
        ref: 'ExerciseTemplate'
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Exercise', exerciseSchema);
