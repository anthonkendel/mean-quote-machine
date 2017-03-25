let mongo = require("mongodb").MongoClient;
let assert = require("assert");

/*
 * Connection URL
 */
let mongoUrl = 'mongodb://localhost:27017/mean-mongo';

/*
 * Check if generated quote already exists in mongodb
 */
let quoteExists = function (quote, quoteCollection) {
    quoteCollection.find({text: quote.text}).toArray(function (err, quotes) {
        if (!assert.equal(null, err)) {
            return quotes.length > 0;
        } else {
            return false;
        }
    });
};

/*
 * Exported modules
 */
module.exports = {
    /*
     * Insert quote in mongodb
     */
    insertQuote: function (quote) {
        mongo.connect(mongoUrl, function (err, db) {
            if (!assert.equal(null, err)) {
                console.log("Connected to mongodb");
                let quoteCollection = db.collection("quotes");

                if (!quoteExists(quote, quoteCollection)) {
                    quoteCollection.insertOne(quote, function (err, result) {
                        if (!assert.equal(err, null)) {
                            console.log(result.ops);
                        } else {
                            console.error("Error: " + err);
                        }
                    });
                }
            } else {
                console.error("Error: " + err);
            }
            db.close();
        });
    }
};
