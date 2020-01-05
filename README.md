# Advanced JavaScript: Constructor Word Guess

### Overview
Using node.js and inquirer.js this application allows a user to guess the correct letter to a pre determined word that was randomly generated for the cars array.


### How to play: 
    
    1. Open Terminal in the "constructor-word-guess" directory.
            - run `node index.js`
    
    2. Once above command ran, user should be able to input a letter.
            <img src="assets/images/word-guess-step2.png"> 
            ![](assets/images/word-guess-step2.png)


    **Incorrect Guess** 
    3.  User selects incorrect letter
            User will be aksed to chose another letter.
                 * Variable guessesLeft will be updated to reflect the remaining guess a user has 
                 * The incorrectLetters arrary will store the guessed letter and will display the letter to the user
                 * User will now be able to see underscore dashses that signifiy the amount of letter remaining 
                  ![](assets/images/word-guess-step3a.png)

    **Correct Guess** 
    3. User select correct letter
        User will be asked to chose another letter.
                * The correctLetters arrary will store the guessed letter
                * The correct letter will replace the underscore dash with its correct index 
                ![](assets/images/word-guess-step3b.png)

    **User Runs Out Of Guesses**
    4. User runs out of remaining guesses
        User will be asked to Play Again
                * Once guessesLeft reaches 0 the game will determine that the user has lost the game
                * User will be alerted that he has lost
                * User will be prompted if they want to play again
                ![](assets/images/word-guess-step4a.png)

    **User Wins**
    4. User successfully guesses the correct car
        User will be asked to Play Again
                * User will be alerted that he has won
                * User will be prompted if they want to play again
                ![](assets/images/word-guess-step4b.png)

    **Restart Game**
    5. User will be able to restart their game once they win or lose
        User will be able to chose from two options
                * Play again option will trigger the mainGame function that would kick start the game over
                * Exit will allow the user to quit the game and enter back into the cmd promt
                ![](assets/images/word-guess-step5a.png)
        
         
