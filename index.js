var word = require("./word.js");
//var letter = require("./letter.js");
var inquirer = require("inquirer");

var letterArrary = "abcdefghijklmnopqrstuvwxyz";

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
//console.log("show my word " + randomIndex);
var cpuWord = new word(randomIndex); //pass new word to constructor

var requireWord = false; //changes upon an if
var correctLetters = []; //contain correct and incorrect letters in an arrary
var incorrectLetters = [];
var guessesLeft = 10; //user has 10 guesses

function mainGame() {
  //a new word will be generated if true

  if (requireWord) {
    //select new word again if true
    var randomIndex = cars[Math.floor(Math.random() * cars.length)];
    var cpuWord = new word(randomIndex);

    var requireWord = false; //new word generated change requireWord back to false
  }

  var wordComplete = []; // check if letter guessed correctly
  computerWord.objArray.forEach(completeCheck);

  // promt user to make a guess until lose or win
  if (completeWord.includes(false)) {
    inquirer
      .prompt([
        {
          type: "input",
          messages: "Select a letter A to Z",
          name: "userInput"
        }
      ])
      .then(function(input) {
        if (
          !letterArray.includes(input.userinput) ||
          input.userinput.length > 1
        ) {
          console.log("Try Again!");
          worldComplete();
        } else {
          if (
            incorrectLetters.includes(input.userinput) ||
            correctLetters.includes(input.userinput) ||
            input.userinput === ""
          ) {
            console.log("Please Try Again, Word Already Guessed");
            worldComplete();
          } else {
            // check if winner
            var wordCheckArray = [];
            computerWord.userGuess(input.userinput);

            completeWord.objArray.forEach(wordCheck);
            if (wordCheckArray.join("") === wordComplete.join("")) {
              console.log("Incorrect");

              incorrectLetters.push(input.userInput); // pushes incorrect letter to the incorrectLetters arrary
              guessesLeft--;
            } else {
              console.log("Corect");

              correctLetters.push(input.userInput); // pushes correct letter to the correctLetters arrary
            }
            computerWord.log();

            console.log("Guess Left: " + guessesLeft);
            console.log("Letters Guesed: " + incorrectLetters.join(" "));

            //restart game if guesses run out
            if (guessesLeft > 0) {
              mainGame();
            } else {
              console.log("sorry you lost");
              restartGame();
            }

            function wordCheck(key) {
              wordCheckArray.push(key.guessed);
            }
          }
        }
      });
  }
}



function restartGame() {
  inquirer
    .prompt([
      {
        type: "list",
        messages: "would you like to play again",
        choices: ["Yes", "No"],
        name: "Play Again?"
      }
    ])
    .then(function(userChoice) {
      console.log("hello ", userChoice, "restart game ");
    });
}
restartGame();
mainGame();
