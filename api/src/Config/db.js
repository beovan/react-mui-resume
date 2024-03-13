'use strict';
const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



client.connect(err => {
  if (err) throw err;
  // perform actions on the collection object
  client.close();
  
});module.exports = client;