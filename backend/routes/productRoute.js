const express = require("express");
const { addMultipleProducts } = require("../controllers/productController");

const router = express.Router();

router.post("/add-products", addMultipleProducts);

module.exports = router;
