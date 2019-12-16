module.exports = (app) => {
    const saveGameController = require('../controllers/saveGame.controller');

    // Save game state for user
    app.post('/api/save/', saveGameController.save);

    // Get save game by user
    app.get('/api/save/:username', saveGameController.findByUser);

    // Delete save game for user
    app.delete('/api/save/:username', saveGameController.delete);
};