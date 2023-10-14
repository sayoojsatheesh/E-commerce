const express = require("express");
const router = express.Router();
const productsControllers = require("../controllers/products-controllers");

router.get("/", productsControllers.getAllItems);

module.exports = router;
