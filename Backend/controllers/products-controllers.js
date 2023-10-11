const HttpError = require("../models/http-error");
const mongoose = require("mongoose");
const productList = require("../models/products");

const getAllItems = async (req, res, next) => {
  let offset = +req.query.offset || 0;
  let filters = req.query.filterBy;
  let categories = req.query.path;
  console.log(filters);
  let sortBy = filters?.sortBy;
  const limit = 9; // Number of items per page

  let subtitlePrefix = "";

  if (categories === "men") {
    subtitlePrefix = "Men's";
  } else if (categories === "women") {
    subtitlePrefix = "Women's";
  } else if (categories === "kids") {
    subtitlePrefix = "Kids";
  }



  try {
    let order;
    if (!sortBy) {
      order = 0;
    } else {
      order = sortBy == "Price: High-Low" ? -1 : 1;
    }

    let products;
    if (categories === "all") {
      if (sortBy) {
        products = await productList
          .find()
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
        products = await productList.find().skip(offset).limit(limit).select({
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
    } else {
      if (sortBy) {
        products = await productList
          .find({ subTitle: { $regex: `^${subtitlePrefix}` } })
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
          .find({ subTitle: { $regex: `^${subtitlePrefix}` } })
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
    }

    let totalCount;
    if (categories === "all") {
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
