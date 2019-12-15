const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let HighscoreModel = new Schema({
    username: {
        type: String
    },
    time: {
        type: String
    },
    type: {
        type: String
    }
}, {
    collection: 'highscores'
});

module.exports = mongoose.model('Highscore', HighscoreModel);
