let express = require("express");
let app = express();

let quoteRouter = require("./routes/quote");

app.use(function (req, res, next) {
    res.charset = "utf-8";
    res.header("Content-Type", "application/json");
    next();
});

app.use(quoteRouter);

app.listen(3000, "0.0.0.0", function () {
    console.log("API up and running.");
});






