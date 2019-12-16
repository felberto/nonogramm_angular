module.exports = (app) => {
    const highscoreController = require('../controllers/highscore.controller');

    // Get all games
    app.get('/api/highscore/', highscoreController.findAll);

    // Get all by type
    app.get('/api/highscore/type/:type', highscoreController.findAllByType);

    // Create highscore
    app.post('/api/highscore/', highscoreController.create);
};
