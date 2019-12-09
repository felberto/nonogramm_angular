module.exports = (app) => {
    const userController = require('../controllers/user.controller');

    // Create user
    app.post('/api/user/', userController.create);
};