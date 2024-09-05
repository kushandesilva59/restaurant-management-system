const Product = require("../models/productModel");
const mongoose = require("mongoose");

//get all users
const getProducts = async (req, res) => {
  const users = await Product.find({}).sort({ createdAt: -1 });

  res.status(200).json(users);
};

const addMultipleProducts = async (req, res) => {
  // The request body should be an array of products
  const products = req.body;

  try {
    // Insert multiple products
    const createdProducts = await Product.insertMany(products);
    res.status(200).json(createdProducts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  console.log(req.body);
};

module.exports = {
  addMultipleProducts,
  getProducts,
};
