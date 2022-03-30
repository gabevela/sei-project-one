// SHARK ATTACK!!! Just like hangman, but better.
// Don't let the shark catch up to the swimmer!
// You have 3 attempts to guess the OCEAN ANIMAL!
// CONSTANTS
const imageOne = ;
const imageTwo = ;
const soundOne = ;
const soundTwo = ;
const oceanAnimals = new array [ 
  "ORCA",
  "DOLPHIN",
  "JELLYFISH",
  "CLOWNFISH",
  "STARFISH",
  "OCTOPUS",
  "LOBSTER",
  "CRAB",
  "SQUID",
  "PLANKTON",
  "SEAHORSE"]

  // APP'S STATE VARIABLES
let randomOceanAnimal = "ocean";
let playerInputLetter = "a";
let playerInputWord = "abc";
let correctClicks = 0;
let wrongClicks = 0;
let swimmerStatus = 0;
let sharkFinPosition = 0;

// CACHED DOM ELEMENTS 
const sharkFinPositionEl = document.getElementById("shark-fin-position");
const swimmerStatusEl = document.getElementById("swimmer-status");
const jawsEl = document.getElementById("jaws");

// EVENT LISTENERS 
startGameButtonEl.addEventListener('click' , playRound);

// FUNCTIONS
function initialize()
function render()

//////////////////////////////////////////////

const secretWord = 'dolphin';
const searchLetter = 'p';
const indexOfFirst = userInputTest.indexOf(searchLetter);
console.log(`indexFirst:"${searchLetter}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"
console.log(`The index of the 2nd "${searchLetter}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"


const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"

let 