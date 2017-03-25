let express = require("express");
let app = express();

let quoteRouter = require("./routes/quote");

app.use(quoteRouter);

app.listen(3000, "localhost", function () {
    console.log("API up and running.");
});






