var word = require("./word.js");
//var letter = require("./letter.js");
var inquirer = require("inquirer");

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

function choseRandomWord() {
  var randomIndex = cars[Math.floor(Math.random() * cars.length)];
  console.log("show my word " + randomIndex);
}

//var cpuWord = new Word(randomWord);
//console.log(cpuWord + ' show cpu word')

var requireWord = false;
var correctLetters = [];
var incorrectLetters = []; //contains incorrect words

var guessesLeft = 10; //user has 10 guesses

function mainGame() {
  if (requireWord) {
    var randomIndex = cars[Math.floor(Math.random() * cars.length)];

   // var cpuWord = new Word(randomWord);

    var requireWord = false;
  }

  var completeWord = [];

  if (completeWord.includes(false)) {
    inquirer
      .prompt([
        {
          type: "input",
          messages: "Select a letter A to Z",
          name: "userGuess"
        }
      ])
      .then(function(guessedLetter) {});
  } else {
    console.log("Winner");
  }
}

function restartGame(){
    inquirer.prompt([
        {
            type: "list",
            messages: "would you like to play again",
            choices: ["Yes", "No"],
            name: "Play Again?"
        }
    ]).then(function(userChoice){
        console.log('hello ' , userChoice , 'restart game ')
        
 

    })

}
restartGame()
mainGame();
