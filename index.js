var word = require("./word.js");
var letter = require("./letter.js");


var letterArrary = "";

var cars = [
    "ferrari",
    "toyota",
    "chevrolet",
    "honda",
    "lexus",
    "acura",
    "hyundai",
    "volvo",
    "audi",
    "volkswagon",
    "nissan",
    "mercedas",
    "subaru",
    "land rover",
    "jeep",
    "lamborghini",
    "bentley",
    "chrystler",
    "fiat",
    "suzuki",
    "bmw"
];

var randomIndex = cars[Math.floor(Math.random() * cars.length)];
console.log("show my word " + randomIndex);


