let express = require("express");
let app = express();

let quoteRouter = require("./routes/Quote.module");

app.use(function (req, res, next) {
    res.charset = "utf-8";
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(quoteRouter);

app.listen(3000, "0.0.0.0", function () {
    console.log("API up and running.");
});






