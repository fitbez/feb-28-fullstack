const router = require("express").Router();
const Product = require("../models/product");
require("dotenv").config();

/* ADD PRODUCT */
router.post("/addproduct", async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* GET PRODUCT */
router.get("/allproducts", async (req, res) => {
  try {
    const result = await Product.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
