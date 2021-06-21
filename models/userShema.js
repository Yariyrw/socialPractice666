const mongoose = require('mongoose');

const usersShemaItems = mongoose.Schema({
    id:String,
    login:String,
    password:String,
    posts:Array
});

module.exports = mongoose.model('users',usersShemaItems)
