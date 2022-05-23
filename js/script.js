const guessedLetters = document.QuerySelector(".guessed-letters");
const guessedLettersButton = document.QuerySelector(".guess");
const letterInput = document.QuerySelector(".letter");
const wordProgress = document.QuerySelector(".word-in-progress");
const guessesRemainingElement = document.QuerySelector(".remaining");
const guessesRemainingSpan = document.QuerySelector(".remaining span");
const message = document.QuerySelector(".message");
const playAgainButton = document.QuerySelector(".play-again");

let word = "magnolia";
const guessedLetters = [];
let remainingGuesses = 8;

const getWord = async function () {
  const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
  const words = await response.text();
  const wordArray = words.split("\n");
  const randomIndex = Math.floor(Math.random() * wordArray.length);
  word = wordArray[randomIndex].trim();
  dots(word);
};

getWord();

const dots = function (word) {
  const dotsLetters = [];
  for (const letter of word) {
  //console.log(letter);
  dotsLetters.push("●");
  }
 wordProgress.innerText = dotsLetters.join("");
};

//dots(word);

guessedLettersButton.addEventListener("click", function (e) {
  e.preventDefault();
  message.innerText = "";
  const guess = letterInput.value;
  //console.log(guess);
  const goodGuess = inputvalid(guess);
  
  if (goodGuess) {
    makeGuess(guess);
  }
  letterInput.value = "";
});

//Lesson 2
const inputValid = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
  message.innerText = "Please enter a letter";
  } else if (input.length > 1) {
  message.innerText = "Please enter only one letter";
  } else if (!input.match(acceptedLetter)) {
  message.innerText = "Enter a letter from A to Z";
  } else {
  return input;
  }
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "You already guessed that letter!";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
    updateGuessesRemaining(guess);
    showGuessedLetters();
    updateWordInProgress(guessedLetters);
  }
};


//Lesson 3
const showGuessedLetters = function () {
  guessedLettersElement.innerHTML = "";
  for (const letter of guessedLetters) {
    const li = document.createElement("li");
    li.innerText = letter;
    guessedLettersElement.append(li);
  }
};

const updateWordProgess = function (guessedLetters) {
  const wordUpper = word.toUpperCase();
  const wordArray = wordUpper.split("");
  const revealWord = [];
  for (const letter of wordArray) {
    if (guessedLetters.includes(letter)) {
      revealWord.push(letter.toUpperCase());
    } else {
      revealWord.push("●");
    }
  }
  wordProgress.innerText = revealWord.join("");
  checkIfWin();
};

const updateGuessesRemaining = function (guess) {
  const upperWord = word.toUpperCase();
  if (!upperWord.includes(guess)) {
    // womp womp - bad guess, lose a chance
    message.innerText = `Sorry, the word has no ${guess}.`;
    remainingGuesses -= 1;
  } else {
    message.innerText = `Good guess! The word has the letter ${guess}.`;
  }

  if (remainingGuesses === 0) {
    message.innerHTML = `Game over! The word was <span class="highlight">${word}</span>.`;
  } else if (remainingGuesses === 1) {
    remainingGuessesSpan.innerText = `${remainingGuesses} guess`;
  } else {
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
  }
};

const checkIfWin = function () {
  if (word.toUpperCase() === wordProgress.innerText) {
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">Youguess the correct word! You Win!</p>;
   }
};
