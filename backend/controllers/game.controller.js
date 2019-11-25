const Game = require('../models/game.model');

// Retrieve and return all games from the database.
exports.findAll = (req, res) => {
    Game.find()
        .then(games => {
            res.send(games);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving games."
        });
    });
};

// Find a single game with a game_id
exports.findOne = (req, res) => {
    Game.findOne({'game_id': req.params.game_id})
        .then(game => {
            res.send(game);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving game."
        });
    });
};

// Find all games with type
exports.findAllByType = (req, res) => {
    Game.find({'type': req.params.type})
        .then(games => {
            res.send(games);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving game by type."
        });
    });
};