function letter(userInput) {
  //userInput is the users inputed key
  this.letter = userInput;
  this.guessed = false; //we set guess to false, if user guess is correct guess = true

  this.toString = function() { //determines guessed and our underscore or blank
    if (this.letter === " ") {
      this.guessed = true;
      return " ";
    } else {
      if (this.guessed === false) {
        return "_";
      } else {
        return this.letter;
      }
    }
  };

  this.userGuess = function(userGuess){ //change guessed to true if userGuess = to guessed
      if(userGuess === this.letter){
          this.guessed = true;
      }
  }
}

module.exports = letter; //export letter function to be available else where
