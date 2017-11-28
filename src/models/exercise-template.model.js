let mongoose = require('mongoose');

let exerciseTemplateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    videoLink: {
        type: String
    }
});

module.exports = mongoose.model('ExerciseTemplate', exerciseTemplateSchema);
