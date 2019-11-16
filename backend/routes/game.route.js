const express = require('express');
const router = express.Router();
const Game = require('../models/game');

// Getting all games
router.get('/', async (req, res) => {
    try {
        const games = await Game.find();
        res.json(games)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

// Getting all games by type
router.get('/type/:type', async (req, res) => {
    try {
        const games = await Game.find({'type': req.params.type});
        res.json(games)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

// Getting one game by id
router.get('/:game_id', async (req, res) => {
    try {
        const game = await Game.findOne({'game_id': req.params.game_id});
        res.json(game)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

module.exports = router;