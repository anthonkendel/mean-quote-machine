var faker = require("express");

function createQuote(string) {
    return ({
        quote: string
    });
}

export {createQuote};