const mongoose = require('mongoose');

const Orders = new mongoose.Schema({
    item: {type: String, default:''},
    price: {type: Number, default:0},
    quantity: {type: Number, default:0}
});

module.exports = mongoose.model('Orders', Orders);