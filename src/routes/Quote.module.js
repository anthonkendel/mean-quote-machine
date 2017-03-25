let wiki = require('wikiquotesjs')
let express = require("express");
let router = express.Router();
let quoteHelpers = require("../helpers/QuoteHelpers.module");

let mongoDB = require("../MongoDB.module");


router.get("/get_random_quote/", function (req, res, next) {
    wiki.getRandomQuote().then(quote => {
        mongoDB.insertQuote(quote);
        res.status(200);
        res.send(quoteHelpers.formatQuote(quote));
    }).catch(err => {
        res.status(400);
        res.send(quoteHelpers.formatQuote(err));
    });
});

router.get("/get_existing_quote/", function (req, res, next) {
    res.send(quoteHelpers.formatQuote("The world is f***** up."));
});

module.exports = router;



