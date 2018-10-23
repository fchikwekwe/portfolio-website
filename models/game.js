const mongoose = require('mongoose');
mongoose.connect(process.env.MONGID_URI || 'mongod://localhost/intensive-website', {useNewUrlParser: true});

const Game = mongoose.model('Game', {
    title: String,
    description: String
})

module.exports = Game;
