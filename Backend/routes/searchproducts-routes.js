const express = require("express");
const router = express.Router();
const searchProductsControllers = require("../controllers/searchProducts-controllers");

router.get("/", searchProductsControllers.searchProducts);

module.exports = router;
