const express = require("express");
const router = express.Router();

const {getProductById, getAllProducts} = require('../controller/productController')

//d@desc GET all products from DB
//@route GET /api/products
//@access Public
router.get('/', getAllProducts)

//d@desc GET a product from DB
//@route GET /api/products/:id
//@access Public
router.get('/:id', getProductById)

module.exports = router;