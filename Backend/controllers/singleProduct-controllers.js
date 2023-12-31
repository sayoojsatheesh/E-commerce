const HttpError = require("../models/http-error");
const productList = require("../models/products");

const getSingleProduct = async (req, res, next) => {
  try {
    let ProductId = req.query.ProductId;
    let products = await productList.find({id: ProductId});
    res.status(200).json({ products });
  } catch (err) {
    console.error(err);
    const error = new HttpError(
      "Something went wrong, could not find places.",
      500
    );
    return next(error);
  }
};

exports.getSingleProduct = getSingleProduct;
