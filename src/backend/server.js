var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017';

// Database Name
var dbName = 'nonogramm';

// Create a new MongoClient
var client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  var db = client.db(dbName);

  findDocuments(db, function () {
    client.close();
  });

  client.close();
});

var findDocuments = function (db, callback) {
  // Get the documents collection
  var collection = db.collection('nonogramm');
  // Find some documents
  collection.find({}).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}
