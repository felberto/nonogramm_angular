const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let UserModel = new Schema({
    user_id: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
}, {
    collection: 'users'
});

module.exports = mongoose.model('User', UserModel);