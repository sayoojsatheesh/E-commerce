const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const itemsRoutes = require("./routes/products-routes");
const singleItemRoute = require("./routes/singleproducts-routes");
const searchProductsRoute = require("./routes/searchproducts-routes");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/items", itemsRoutes);
app.use("/api/SingleProduct", singleItemRoute);
app.use("/api/SearchProducts", searchProductsRoute);

mongoose
  .connect(
    `mongodb+srv://sayooj0076:${process.env.DB_PASSWORD}@cluster0.7kjwjeq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
