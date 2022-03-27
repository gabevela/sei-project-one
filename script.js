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
