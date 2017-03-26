let express = require("express");
let app = express();

let quoteRouter = require("./routes/Quote.module");

app.set("port", (process.env.PORT || 3000));

app.use("/",express.static("public"));

app.use(function (req, res, next) {
    res.charset = "utf-8";
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(quoteRouter);

app.listen(app.get("port"), function () {
    console.log("Node app is running on port", app.get("port"));
});
