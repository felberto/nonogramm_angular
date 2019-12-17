const Highscore = require('../models/highscore.model');

// Retrieve and return all highscores from the database.
exports.findAll = (req, res) => {
    Highscore.find()
        .then(highscores => {
            res.status(200).send(highscores);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving highscores."
        });
    });
};

// Find all highscores with type
exports.findAllByType = (req, res) => {
    Highscore.find({'type': req.params.type})
        .then(highscores => {
            res.status(200).send(highscores);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving highscores by type."
        });
    });
};

// create highscore
exports.create = (req, res) => {
    // Create highscore
    let highscore = new Highscore(req.body);

    // Save highscore in the database
    highscore.save()
        .then(data => {
            res.status(200).json({
                message: 'Saved!'
            });
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the highscore."
        });
    });
};
