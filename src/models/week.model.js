let mongoose = require('mongoose');

let weekSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    block: {
        type: mongoose.Types.ObjectId,
        ref: 'Block',
        required: true
    },
    programs: {
        type: [mongoose.Types.ObjectId],
        ref: 'Program',
        default: []
    },
    week: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Week', weekSchema);