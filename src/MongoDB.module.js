let mongo = require("mongodb").MongoClient;
let assert = require("assert");


let errorQuote = {
    quote: {
        text: "Not found.",
        from: "Not found.",
        author: "Not found."
    }
};

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
            try {
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
            } catch (err) {
                console.error("Error: " + err);
            } finally {
                if (db) {
                    db.close()
                }
            }
        });
    },

    findRandomQuote: function () {
        return new Promise(function (resolve, reject) {
            mongo.connect(mongoUrl, function (err, db) {
                try {
                    if (!assert.equal(null, err)) {
                        console.log("Connected to mongodb");
                        let quoteCollection = db.collection("quotes");

                        quoteCollection.find({}).toArray(function (err, quotes) {
                            if (!assert.equal(null, err) && quotes.length > 0) {
                                let index = Math.floor(quotes.length * Math.random());
                                resolve(quotes[index]);
                            } else {
                                reject("No quotes available");
                            }
                        });
                    } else {
                        console.error("Error: " + err); // Log for server use
                        reject("Could not connect to the database"); // Reply for client
                    }
                } catch (err) {
                    console.error("Error: " + err); // Log for server use
                    reject(errorQuote); // Reply for client
                } finally {
                    if (db) {
                        db.close()
                    }
                }
            });
        });
    }
};