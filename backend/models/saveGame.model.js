const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let SaveGameModel = new Schema({
    username: {
        type: String
    },
    game_id: {
        type: Number
    },
    time: {
        type: Number
    },
    type: {
        type: String
    },
    buttons: {
        type: Array
    },
}, {
    collection: 'savegames'
});

module.exports = mongoose.model('SaveGame', SaveGameModel);