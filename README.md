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
                * 


    **User Wins**
    4. 


    **Restart Game**
