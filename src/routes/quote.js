let wiki = require('wikiquotesjs')
let express = require("express");
let router = express.Router();
let quoteHelpers = require("../helpers/quoteHelpers");


router.get("/get_random_quote/", function (req, res, next) {
    wiki.getRandomQuote().then(result => {
        res.send(quoteHelpers.createQuote(result));
    }).catch(err => {
        res.send(quoteHelpers.createQuote(err));
    });
});

router.get("/get_existing_quote/", function (req, res, next) {
    res.send("existing quote");
});

module.exports = router;



