var express = require('express');
var router = express.Router();

router.get("/get_random_quote/", function (req, res, next) {
    res.send("random quote");
});

router.get("/get_existing_quote/", function (req, res, next) {
    res.send("existing quote");
});

module.exports = router;



