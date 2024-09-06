const express = require("express");
const { addMultipleProducts ,getProducts} = require("../controllers/productController");

const router = express.Router();

router.post("/add-products", addMultipleProducts);
router.get("/", getProducts);

module.exports = router;
