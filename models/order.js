const mongoose = require("mongoose");

const Order = mongoose.model(
  "orders",
  new mongoose.Schema({
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
      default: 1,
    },
    totalPrice: {
      type: Number,
    },
    discount: {
      type: Number,
    },
  })
);

module.exports = Order;
