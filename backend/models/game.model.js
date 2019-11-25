const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let GameModel = new Schema({
    game_id: {
        type: String
    },
    type: {
        type: String
    },
    rows: {
        type: Array
    },
    columns: {
        type: Array
    },
    solution: {
        type: Array
    },
}, {
    collection: 'games'
});

module.exports = mongoose.model('Game', GameModel);