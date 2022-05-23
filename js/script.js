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
