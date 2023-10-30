const HttpError = require("../models/http-error");
const productList = require("../models/products");

const searchProducts = async (req, res, next) => {
  try {
    let searchTerm = req.query.searchTerm.toLowerCase(); // Convert searchTerm to lowercase
    let products = await productList.find({
      title: { $regex: searchTerm, $options: "i" }, // Case-insensitive and partial matching for searchTerm in title
    }).limit(6);
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

exports.searchProducts = searchProducts;
