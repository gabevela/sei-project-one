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
let secretWord = "OCEANANIMAL";
console.log("the secret word is:", secretWord);
let lengthOfSecrectWord = secretWord.length;

//reset / play again function 


// CACHED DOM ELEMENTS 
const letterBtnListEl = document.querySelectorAll("[data-letter]");
// const startGameBtnEl = document.getElementById("data-start-game");
// const endGameBtnEl = document.getElementById("data-end-game");
// const sharkFinPositionEl = document.getElementById("shark-fin-position");
// const scubaEl = document.getElementById("swimmer-status");
// const jawsEl = document.getElementById("jaws");

// EVENT LISTENERS 
letterBtnListEl.forEach(function (letterBtnEl) {
  letterBtnEl.addEventListener('click', function (event) {
    console.log("Letter clicked:", event.target.innerHTML);
    guessedLetter = event.target.innerHTML;
    console.log("LINE 34 GUESSED LETTER:", guessedLetter);
    function onLetterPressDown() {
      let indexOfFirst = secretWord.indexOf(guessedLetter);
      if (indexOfFirst >= 0) {
        for (let j = 0; j < lengthOfSecrectWord; j++) {
          if (secretWord[j] == guessedLetter) {
            console.log("CORRECT LETTER PRESSED!", guessedLetter, "is at index", indexOfFirst, "of the secret word.");
            document.getElementById(j).innerHTML = guessedLetter;
          }
        }
      } else {
        console.log("WRONG LETTER PRESSED")
      }
      // event.target.disabled = true
    }
    onLetterPressDown()
  })
});
//startGameButtonEl.addEventListener('click' , "function");
// letterBtnEl.addEventListener('click' , function importGuessedLetter(){
//   guessedLetter = document.getElementById("Aa").innerHTML;
//   console.log("DOM KEYBOARD LETTER PRESSED");
//   console.log(guessedLetter);
//   onLetterPressDown();
//   // PUSH METHOD NEEDED TO SAVE THE CORRECT LETTER TO THE ARRAY TO 
//   //BUILD THE secretWord UP FROM SCRATCH ONCE THE PLAYER KEEPS PRESSING LETTERS
//  });
// let new Array = [ insert  vlaues with a push method]
// object to hold the previous letters 

// FUNCTIONS
function blankDashesHint() {
  const letterContainerDash = document.getElementById("letter-placeholder")
  for (let i = 0; i < lengthOfSecrectWord; i++) {
    let elementDash = document.createElement("button");
    letterContainerDash.appendChild(elementDash);
    elementDash.id = i;
  }
}
blankDashesHint()

// function onLetterPressDown(guessedLetter) {
//   let indexOfFirst = secretWord.indexOf(guessedLetter);
//   if (indexOfFirst >= 0) {
//       console.log("CORRECT LETTER PRESSED!", guessedLetter, "is at index", indexOfFirst, "of the secret word.");
//       document.getElementById(indexOfFirst).innerHTML = guessedLetter;
//   } else {
//       console.log("WRONG LETTER PRESSED")
//   }
// };