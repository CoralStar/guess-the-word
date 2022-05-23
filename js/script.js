const guessedLetters = document.QuerySelector(".guessed-letters");
const guessedLettersButton = document.QuerySelector(".guess");
const letterInput = document.QuerySelector(".letter");
const wordProgress = document.QuerySelector(".word-in-progress");
const guessesRemaining = document.QuerySelector(".remaining");
const guessesRemainingSpan = document.QuerySelector(".remaining span");
const message = document.QuerySelector(".message");
const playAgainButton = document.QuerySelector(".play-again hide");

const word = "magnolia";
const guessedLetters = [];

const dots = function (word) {
  const dotsLetters = [];
  for (const letter of word) {
  console.log(letter);
  dotsLetters.push("●");
  }
 wordProgress.innerText = dotsLetters.join("");
};

dots(word);

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
  if (input.innerText === 0) {
  message.innerText = "Please enter a letter";
  } else if (input.innerText > 1) {
  message.innerText = "Please enter only one letter";
  } else if (!input.match(acceptedLetter)) {
  message.innerText = "Enter a letter from A to Z";
  } else {
  return input;
  }
};

const makeGuess = function (guess) {
  guess = guess.yoUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "You already guessed that letter!";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
    showGuessedLetters();
    updateWordProgress(guessedLetters);
  }
};


//Lesson 3
const showGuessedLetters = function () {
  guessedLettersElement.innerText = "";
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

const checkIfWin = function () {
  if (word.toUpperCase() === wordProgress.innerText) {
    message.classList.add("win");
    message.innerText = `<p class="highlight">Youguess the correct word! You Win!</p>;
   }
};
