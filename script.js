// SHARK ATTACK!!! Just like hangman, but better.
// Don't let the shark catch up to the swimmer!
// You have 3 attempts to guess the OCEAN ANIMAL!
// CONSTANTS
// const imageTwo = ;
// const soundOne = ;
// const soundTwo = ;
// const oceanAnimals = new array [ 
//   "ORCA",
//   "DOLPHIN",
//   "CLOWNFISH",
//   "LOBSTER",
//   "CRAB",
//   "SQUID"]

  // APP's STATE VARIABLES
let secretWord = "Dog";
let lengthOfSecrectWord = secretWord.length;
let guessedLetter = "";

// CACHED DOM ELEMENTS 
const letterBtnEl = document.getElementById("Aa");
const startGameBtnEl = document.getElementById("data-start-game");
const endGameBtnEl = document.getElementById("data-end-game");

const sharkFinPositionEl = document.getElementById("shark-fin-position");
const scubaEl = document.getElementById("swimmer-status");
const jawsEl = document.getElementById("jaws");

// EVENT LISTENERS 
//startGameButtonEl.addEventListener('click' , "function");
letterBtnEl.addEventListener('click' , function importGuessedLetter(){
  guessedLetter = document.getElementById("Aa").innerHTML;
  // document.getElementById("Aa").innerHTML = guessedLetter;
  console.log("DOM KEYBOARD LETTER PRESSED");
  console.log(guessedLetter);
   // USE .textContent
   return
 });

// let new Array = [
// //insert  vlaues with a push method


// ]

// FUNCTIONS
function onLetterPressDown() {
  let indexOfFirst = secretWord.indexOf(guessedLetter);
  if (indexOfFirst >= 0) {
      console.log("CORRECT LETTER PRESSED!", guessedLetter, "is at index", indexOfFirst, "of the secret word.");
      document.getElementById(indexOfFirst).innerHTML = guessedLetter;

  } else {
      console.log("WRONG LETTER PRESSED")
  }
}
onLetterPressDown()