let wiki = require('wikiquotesjs')
let express = require("express");
let router = express.Router();
let quoteHelpers = require("../helpers/QuoteHelpers.module");

let mongoDB = require("../MongoDB.module");


router.get("/get_random_quote/", function (req, res, next) {
    wiki.getRandomQuote().then(quote => {
        // mongoDB.insertQuote(quote);
        quote.text = quote.text + " " + quote.from;
        res.status(200);
        res.send(quoteHelpers.formatQuote(quote));
    }).catch(err => {
        res.status(400);
        res.send(quoteHelpers.formatQuote(err));
    });
});

router.get("/get_quote_of_the_day/", function (req, res, next) {
    wiki.getQOTD().then(quote => {
        quote.text = quote.text.text;
        quote["from"] = "";
        // mongoDB.insertQuote(quote);
        res.status(200);
        res.send(quoteHelpers.formatQuote(quote));
    }).catch(err => {
        res.status(400);
        res.send(quoteHelpers.formatQuote(err));
    });
});

router.get("/get_existing_quote/", function (req, res, next) {
    // mongoDB.findRandomQuote().then(function(value) {
    //    res.status(200);
    //    res.send(value);
    // }, function(reason) {
    //    res.status(200);
    //    res.send(reason);
    // });
});



module.exports = router;
