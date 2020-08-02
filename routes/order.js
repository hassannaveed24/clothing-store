const Order = require("../models/order");
const Product = require("../models/product");
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const orders = await Order.find().lean();
});

router.post("/", async (req, res) => {
  try {
    const product = await Product.findById(req.body.productId);
    if (!product)
      return res.status(404).send("The product with the given ID not found.");

    const order = new Order({
      quantity: req.body.quantity,
      product: req.body.productId,
    });
    await order.save();
    res.status(200).send(order);
  } catch (err) {
    res.status(406).send(err);
  }
});

module.exports = router;
