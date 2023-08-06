const mongoose = require('mongoose');

const Inventories = new mongoose.Schema({
  sku: { type: String, default: '' },
  description: { type: String, default: '' },
  instock: { type: Number, default: 0 },
});

module.exports = mongoose.model('Inventories', Inventories);
