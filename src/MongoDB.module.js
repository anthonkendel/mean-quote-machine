let mongo = require("mongodb").MongoClient;
let assert = require("assert");

// Connection URL
let url = 'mongodb://localhost:27017/mean-mongo';

// Use connect method to connect to the Server

mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    db.close();
});
