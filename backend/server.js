const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nonogramm', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

app.use(express.json());

const gameRoute = require('./routes/game.route');
app.use('/api/game', gameRoute);

app.listen(8080, () => console.log('server started'));