let mongoose = require('mongoose');
let Exercise = mongoose.model('Exercise');

module.exports = {
    get: async (req, res) => {
        try {
            let exercise = await Exercise.findById(req.params.id);

            res.status(200);
            res.json(exercise);
        } catch (e) {
            console.log(e);
            res.status(404);
            res.json({message: "Could not find an exercise with that ID."});
        }
    },
    getAll: async (req, res) => {
        try {
            let exercise = await Exercise.findById(req.params.id);

            res.status(200);
            res.json(exercise);
        } catch (e) {
            console.log(e);
            res.status(404);
            res.json({message: "Could not find an exercise with that ID."});
        }
    }
};
