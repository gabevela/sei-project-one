// SHARK ATTACK!!! Just like hangman, but better.
// Don't let the shark catch up to the scuba diver!
// You have 5 attempts to guess the OCEAN ANIMAL!
// CONSTANTS
const oceanAnimals = [
  "ORCA",
  "DOLPHIN",
  "CLOWNFISH",
  "LOBSTER",
  "CRAB",
  "SQUID",
  "SHARK",
  "SEAHORSE",
  "CUTTLEFISH",
  "JELLYFISH",
  "MONKFISH",
  "PENGUIN",
  "ANGELFISH",
  "ANCHOVIES",
  "BARRACUDA",
  "OCTOPUS",
  "TUNA",
  "VIPERFISH",
  "STONEFISH",
  "SALMON"
];
// APP's STATE VARIABLES
let secretWord = "";
let lengthOfSecrectWord = secretWord.length;
let sharkDistance = 50;
const jawsIntro = new Audio('assets/jawsIntro.mp3');
const drowningDead = new Audio('assets/drowningDead.mp3');
const dangerGame = new Audio('assets/dangerGame.mp3');
// CACHED DOM ELEMENTS 
const letterBtnListEl = document.querySelectorAll("[data-letter]");
const startGameBtnEl = document.getElementById("data-start-game");
// EVENT LISTENERS 
startGameBtnEl.addEventListener('click', startgame);
letterBtnListEl.forEach(function (letterBtnEl) {
  letterBtnEl.addEventListener('click', function (event) {
    console.log("Letter clicked:", event.target.innerHTML);
    guessedLetter = event.target.innerHTML;
    console.log("LINE 37 GUESSED LETTER:", guessedLetter);
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
        sharkDistance -= 10;
        console.log("Wrong letter! Shark distance:", sharkDistance, "meters!")
        if (sharkDistance == 40) {
          document.getElementById("shark-container-one").style.visibility = "visible";
        } else if (sharkDistance == 30) {
          document.getElementById("shark-container-two").style.visibility = "visible";
        } else if (sharkDistance == 20) {
          document.getElementById("shark-container-three").style.visibility = "visible";
        } else if (sharkDistance == 10) {
          document.getElementById("shark-container-four").style.visibility = "visible";
        } else { 
          jawsIntro.play();
          document.getElementById("letter-placeholder").style.visibility = "hidden";
          document.getElementById("letter-button").style.visibility = "hidden";
          document.getElementById("shark-container-one").style.visibility = "hidden";
          document.getElementById("shark-container-two").style.visibility = "hidden";
          document.getElementById("shark-container-three").style.visibility = "hidden";
          document.getElementById("shark-container-four").style.visibility = "hidden";
          document.getElementById("scuba-container").style.visibility = "hidden";
          // window.location.href = "indexLostGame.html";
        }
        event.target.disabled = true;
        endGame()
      }
      event.target.disabled = true;
    }
    onLetterPressDown()
  })
})
// FUNCTIONS
function blankDashesHint() {
  const letterContainerDash = document.getElementById("letter-placeholder")
  for (let i = 0; i < lengthOfSecrectWord; i++) {
    let elementDash = document.createElement("button");
    letterContainerDash.appendChild(elementDash);
    elementDash.id = i;
  }
}
function startgame() {
  dangerGame.play();
  startGameBtnEl.disabled = true;
  document.getElementById("letter-button").style.visibility = "visible";
  document.getElementById("scuba-container").style.visibility = "visible";
  let r = Math.floor(Math.random() * 20);
  console.log("Start Game button pressed! Random number:", r);
  secretWord = oceanAnimals[r];
  lengthOfSecrectWord = secretWord.length;
  console.log("The secret word is:", secretWord, " at oceanAnimals array index:", r);
  blankDashesHint();
  return secretWord;
};

