const HttpError = require("../models/http-error");
const mongoose = require("mongoose");
const productList=require('../models/products')

const getAllItems = async (req, res, next) => {
  let products;
  try {
    products = await productList.find();
    console.log(products);
  } catch (err) {
    console.log(err)
    const error = new HttpError(
      "Something went wrong, could not find places.",
      500
    );
    return next(error);
  }
};

exports.getAllItems = getAllItems;
