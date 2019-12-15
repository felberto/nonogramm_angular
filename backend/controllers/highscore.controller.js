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

exports.create = (req, res) => {
    // Create highscore
    const highscore = new Highscore({
        username: req.body.username || "Invalid username",
        time: req.body.time || "Invalid time",
        type: req.body.type || "Invalid type"
    });

    // Save highscore in the database
    highscore.save()
        .then(data => {
            const resHighscore = new User({
                username: data.username
            });
            res.send(resHighscore);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the highscore."
        });
    });
};
