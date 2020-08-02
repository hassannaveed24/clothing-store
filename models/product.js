const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose.connection);

const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    productImage: {
      type: String,
    },
    priority: {
      type: Number,
    },
  }).plugin(autoIncrement.plugin, { model: "products", field: "priority" })
);

module.exports = Product;
