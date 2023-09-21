const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  price: { type: Object, required: true },
  description: { type: String, required: true },
  colour: { type: String, required: true },
  style: { type: String, required: true },
  review: { type: Number, required: true },
  image1: { type: Buffer, required: true },
  image2: { type: Buffer, required: true },
  image3: { type: Buffer, required: true },
  image4: { type: Buffer, required: true },
  image5: { type: Buffer, required: true },
});

module.exports = mongoose.model("Product", productSchema);
