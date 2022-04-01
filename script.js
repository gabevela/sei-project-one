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
//   "JELLYFISH",
//   "CLOWNFISH",
//   "STARFISH",
//   "OCTOPUS",
//   "LOBSTER",
//   "CRAB",
//   "SQUID",
//   "PLANKTON",
//   "SEAHORSE"]

  // APP'S STATE VARIABLES
let randomOceanAnimal = "ocean";
let playerInputLetter = "a";
let playerInputWord = "abc";
let correctClicks = 0;
let wrongClicks = 0;
let swimmerStatus = 0;
let sharkFinPosition = 0;

// CACHED DOM ELEMENTS 
const letterBtnEl = document.querySelectorAll('[data-letter]');
const startGameBtnEl = document.getElementById("data-start-game");
const endGameBtnEl = document.getElementById("data-end-game");

const sharkFinPositionEl = document.getElementById("shark-fin-position");
const scubaEl = document.getElementById("swimmer-status");
const jawsEl = document.getElementById("jaws");

// EVENT LISTENERS 
// startGameButtonEl.addEventListener('click' , playRound);

// FUNCTIONS
// function initialize()
// function render()
// function totalGuesses  (  constructor  )

//////////////////////////////////////////////
let secretWord = 'DOLPHIN';
let guessLetter = "P";
let indexOfFirst = secretWord.indexOf(guessLetter);
console.log(indexOfFirst);

