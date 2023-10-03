const HttpError = require("../models/http-error");
const mongoose = require("mongoose");
const productList = require("../models/products");

const getAllItems = async (req, res, next) => {
  let offset = +req.query.offset || 0;
  const limit = 9; // Number of items per page

  try {
    const products = await productList.find().skip(offset).limit(limit).select({
      id: 1,
      title: 1,
      subTitle: 1,
      price: 1,
      description: 1,
      colour: 1,
      style: 1,
      review: 1,
      image1: 1,
    });

    const totalCount = await productList.countDocuments({});
    offset = offset + 6;

    res.status(200).json({ products, totalCount, offset });
  } catch (err) {
    console.error(err);
    const error = new HttpError(
      "Something went wrong, could not find places.",
      500
    );
    return next(error);
  }
};

exports.getAllItems = getAllItems;
