var espect = require("chai").espect;
var getPrices = require("../src/shop-tools.js").getPrices;

describe("get prices", function ()
{
    var products = getPrices();

    it("bla", function ()
    {
        espect(products).to.eql({
            banana: 1,
            potato: 2,
            tomato: 3,
            cucumber: 4,
            salad: 5,
            apple: 6
        });
    });
});
