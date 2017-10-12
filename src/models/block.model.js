let mongoose = require('mongoose');

let blockSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    weeks: {
        type: [mongoose.Types.ObjectId],
        ref: 'Week',
        default: []
    }
});

module.exports = mongoose.model('Block', blockSchema);