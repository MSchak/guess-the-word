//Unordered list displaying guessed letters
const guessedLetters = document.querySelector(".guessed-letters");
//Button to guess letter
const button = document.querySelector(".guess");
//Input field for guessing letter
const guessInput = document.querySelector(".letter");
//Word being guessed
const wordInProgress = document.querySelector(".word-in-progress");
//Paragraph that lists how many remaining guesses
const remainingGuesses = document.querySelector(".remaining");
//Span for number of guesses remaining
const numOfGuesses = document.querySelector(".remaining span");
//Messge letting user know if they have guessed a correct or incorrect letter
const guessResponse = document.querySelector(".message");
//Hidden button allowing user to play again
const playAgain = document.querySelector(".play-again");
//Test word

const word = "magnolia";

const updateWordInProgress = function(word) {
    const placeHolders = [];
    for (let letter of word){
        console.log(letter);
        placeHolders.push("●");
    }
    wordInProgress.innerText = placeHolders.join("");
};

updateWordInProgress(word);

button.addEventListener("click", function(e) {
    e.preventDefault();
    const inputValue = guessInput.value;
    console.log(inputValue);
    guessInput.value = ""; 
})
