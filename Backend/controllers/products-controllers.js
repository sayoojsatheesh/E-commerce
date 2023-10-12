const HttpError = require("../models/http-error");
const mongoose = require("mongoose");
const productList = require("../models/products");

const getAllItems = async (req, res, next) => {
  let offset = +req.query.offset || 0;
  let filters = req.query.filterBy;
  let categories = req.query.path;
  let sortBy = filters?.sortBy;
  const limit = 9; // Number of items per page

  console.log("filters =", filters);
  console.log("sortBy =", sortBy);
  console.log("categories =", categories);

  let subtitlePrefix = "";

  if (categories === "men") {
    subtitlePrefix = "Men's";
  } else if (categories === "women") {
    subtitlePrefix = "Women's";
  } else if (categories === "kids") {
    subtitlePrefix = "Kids";
  }

  // Convert Object to String //
  function generateString(obj) {
    const categories = [];

    if (obj.Men === "true") {
      categories.push("Men's");
    }
    if (obj.Female === "true") {
      categories.push("Women's");
    }
    if (obj.Kids === "true") {
      categories.push("Kids");
    }

    return categories.join("|");
  }

  if (categories == "all") {
    subtitlePrefix = generateString(filters.genders);
  }  

  let genderQuery = { subTitle: { $regex: `^${subtitlePrefix}` } };
  try {
    let order;
    if (!sortBy) {
      order = 0;
    } else {
      order = sortBy == "Price: High-Low" ? -1 : 1;
    }

    let products;
    if (sortBy) {
      products = await productList
        .find(genderQuery)
        .skip(offset)
        .limit(limit)
        .select({
          id: 1,
          title: 1,
          subTitle: 1,
          price: 1,
          description: 1,
          colour: 1,
          style: 1,
          review: 1,
          image1: 1,
        })
        .sort({ price: order });
    } else {
      products = await productList
        .find(genderQuery)
        .skip(offset)
        .limit(limit)
        .select({
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
    }

    let totalCount;
    console.log(categories === "all" && subtitlePrefix.length > 0)
    if (categories === "all" && subtitlePrefix.length == 0) {
      totalCount = await productList.countDocuments({});
    } else {
      totalCount = await productList.countDocuments({
        subTitle: { $regex: `^${subtitlePrefix}` },
      });
    }

    offset = offset + 9;

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
