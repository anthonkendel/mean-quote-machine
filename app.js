var express = require("express");
var app = express();

var quoteRouter = require("./routes/quote");

app.use(quoteRouter);

app.listen(3000, "0.0.0.0", function () {
    console.log("API up and running.");
});






