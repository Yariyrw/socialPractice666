const mongoose = require('mongoose');

const chatMessageShema = mongoose.Schema({
    data:Object,
});

module.exports = mongoose.model('chat-message',chatMessageShema)
