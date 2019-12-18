const SaveGame = require('../models/saveGame.model');

// Retrieve and return save games from the database.
exports.findByUser = (req, res) => {
    SaveGame.find({'username': req.params.username})
        .then(data => {
            res.status(200).send(data[0]);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving save game."
        });
    });
};

// Save game for user
exports.save = (req, res) => {
    const saveGame = new SaveGame(
        {
            username: req.body.username,
            game_id: req.body.game_id,
            timeSec: req.body.timeSec,
            timeMin: req.body.timeMin,
            type: req.body.type,
            buttons: req.body.buttons,
        }
    );

    // Save user in the database
    saveGame.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while saving game."
        });
    });
};

// Delete saved game for user
exports.delete = (req, res) => {
    SaveGame.deleteOne({'username': req.params.username})
        .then(
            () => {
                res.status(200).json({
                    message: 'Deleted!'
                });
            }
        ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};
