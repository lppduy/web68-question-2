const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    username: {type: String, default:''},
    password: {type: String, default:''}    
});

module.exports = mongoose.model('Users', Users);