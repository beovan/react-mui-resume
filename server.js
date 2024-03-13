const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config({path:'/.env'});
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let routes = require('./api/src/Router/routes') //importing route
routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

// MongoDB connection string
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) throw err;
  console.log("Connected to MongoDB");

  app.listen(port, () => {
    console.log('RESTful API server started on: ' + port);
  });
});