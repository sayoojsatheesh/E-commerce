const express = require("express");
const router = express.Router();
const singleProductControllers = require("../controllers/singleProduct-controllers");

router.get("/", singleProductControllers.getSingleProduct);

module.exports = router;
