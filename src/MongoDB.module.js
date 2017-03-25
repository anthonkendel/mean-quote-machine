let mongo = require("mongodb").MongoClient;
let assert = require("assert");

// Connection URL
let url = 'mongodb://localhost:27017/mean-mongo';

// Use connect method to connect to the Server

mongo.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected to mongodb");
    db.close();
});

module.exports = {
    insertQuote: function (quote) {
        mongo.connect(url, function (err, db) {
            if (!assert.equal(null, err)) {
                console.log("Connected correctly to server");
                let quotes = db.collection("quotes");

                quotes.insertOne(quote, function (err, result) {
                    assert.equal(err, null);

                    console.log(result.ops);
                });
            }
            db.close();
        });
    }
}
