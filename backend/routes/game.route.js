module.exports = (app) => {
    const gameController = require('../controllers/game.controller');

    // Get all games
    app.get('/api/game/', gameController.findAll);

    // Get all by type
    app.get('/api/game/type/:type', gameController.findAllByType);

    // Get all by id
    app.get('/api/game/:game_id', gameController.findOne);
};