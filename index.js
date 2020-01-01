var word = require("./word.js");


var letterArrary = "abcdefghijklmnopqrstuvwxyz";

// list of cars to spell
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


// Pick Random index from UnitedStates array
var randomIndex = Math.floor(Math.random() * cars.length);
var randomWord = cars[randomIndex];

// Pass random word through Word constructor
var computerWord = new word(randomWord);


var requireNewWord = false;

var correctLetters = []; //contain correct and incorrect letters in an arrary
var incorrectLetters = [];

var guessesLeft = 10; //user has 10 guesses





//start of game -------


function mainGame() {
  //a new word will be generated if true

  if (requireNewWord) {
    //select new word again if true
// Pick Random index from UnitedStates array
var randomIndex = Math.floor(Math.random() * cars.length);
var randomWord = cars[randomIndex];

// Pass random word through Word constructor
computerWord = new word(randomWord);

requireNewWord = false; //new word generated change requireWord back to false
  }

  var wordComplete = []; // check if letter guessed correctly
  computerWord.objArray.forEach(completeCheck);

  // promt user to make a guess until lose or win
  if (wordComplete.includes(false)) {
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
          !letterArrary.includes(input.userinput) ||
          input.userinput.length > 1
        ) {
          console.log("Try Again!");
          mainGame();
        } else {
          if (
            incorrectLetters.includes(input.userinput) ||
            correctLetters.includes(input.userinput) ||
            input.userinput === ""
          ) {
            console.log("Please Try Again, Word Already Guessed");
            mainGame();
          } else {
            // check if guess is correct
            var wordCheckArray = [];
            computerWord.userGuess(input.userinput);

            computerWord.objArray.forEach(wordCheck);
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
  } else {
    console.log("Congrats You Won!");

    restartGame();
  }

  function completeCheck(key){
    wordComplete.push(key.guessed)
  }
}

function restartGame() {
  inquirer
    .prompt([
      {
        type: "list",
        messages: "would you like to play again",
        choices: ["Yes", "No"],
        name: "playagain"
      }
    ])
    .then(function(input) {
      if (input.playagain === "Yes") {
        requireNewWord = true;
        incorrectLetters = [];
        correctLetters = [];
        guessesLeft = 10;
        mainGame();
      } else {
        return;
      }
    });
}

mainGame();
