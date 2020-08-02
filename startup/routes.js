const express = require("express");
const product = require("../routes/product");
const order = require("../routes/order");
module.exports = (app) => {
  app.use("/uploads", express.static("uploads"));
  app.use(express.json());

  require("../db/conn");

  app.use("/api/product", product);
  app.use("/api/order", order);
};
