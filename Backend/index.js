const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const HttpError = require('./models/http-error');
const itemsRoutes=require('./routes/products-routes')

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/api/items', itemsRoutes);

mongoose
  .connect(
    `mongodb+srv://sayooj0076:eabTM4tUwGZwnFn3@cluster0.7kjwjeq.mongodb.net/ECommerce?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });