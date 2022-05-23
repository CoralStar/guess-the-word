const guessedLetters = document.QuerySelector(".guessed-letters");
const guessedLettersButton = document.QuerySelector(".guess");
const letterInput = document.QuerySelector(".letter");
const wordProgress = document.QuerySelector(".word-in-progress");
const guessesRemaining = document.QuerySelector(".remaining");
const guessesRemainingSpan = document.QuerySelector(".remaining span");
const message = document.QuerySelector(".message");
const playAgainButton = document.QuerySelector(".play-again hide");

const word = "magnolia";

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
  const guess = letterInput.value;
  console.log(guess);
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
}
