//Unordered list displaying guessed letters
const guessedLettersList = document.querySelector(".guessed-letters");
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
const guessedLetters = [];

const wordInProgressPlaceholders = function(word) {
    const placeHolders = [];
    for (let letter of word){
        console.log(letter);
        placeHolders.push("●");
    }
    wordInProgress.innerText = placeHolders.join("");
};

wordInProgressPlaceholders(word);

button.addEventListener("click", function(e) {
    e.preventDefault();
    const inputValue = guessInput.value;
    console.log(inputValue);
    guessInput.value = ""; 
    guessResponse.innerText = "";
    const validating = validateInput(inputValue);
    if (validating){
        makeGuess(inputValue);
    }
})

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;

    if (input.length === 0){
        guessResponse.innerText = "Please enter a letter";
    } else if (input.length > 1){
        guessResponse.innerText = "Please only enter one letter";
    } else if (!input.match(acceptedLetter)){
        guessResponse.innerText = "Please enter a letter from a - z";
    } else {
        return input;
    }
};

const makeGuess = function(inputValue){
    inputValue = inputValue.toUpperCase();

    if (guessedLetters.includes(inputValue)){
        guessResponse.innerText = "Oops! You've already guessed that letter, please try again";
    } else {guessedLetters.push(inputValue)};
            console.log(guessedLetters);
            displayGuessedLetters();
            updateWordInProgress(guessedLetters);
};

const displayGuessedLetters = function() {
    guessedLettersList.innerHTML = "";
    for (letter of guessedLetters) {
    let li = document.createElement("li");
    li.innerText = letter;
    guessedLettersList.append(li);
    }
};

const updateWordInProgress = function(guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    console.log(wordArray);
    const newWordInProgress = [];
    for (let letter of wordArray){
        if (guessedLetters.includes(letter)){
            newWordInProgress.push(letter.toUpperCase());
        } else {newWordInProgress.push("●")}
    }
    wordInProgress.innerText = newWordInProgress.join("");
    playerWins();
};

const playerWins = function() {
    if (word.toUpperCase() === wordInProgress.innerText){
        guessResponse.classList.add("win");
        guessResponse.innerHTML = `<p class="highlight">You guessed the word! Congrats!</p>`;
    }
};