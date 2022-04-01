//NOTES:  for sake of simplicity, the preloaded secretWords will not contain a given letter more than once. 
//no duplicate letters in a secretWord. I want to keep the game as simple as possible and do not want
//to incoporate a loop that will search through the whole loop for the same letter more than once.
let alertOne = alert("test one script");
let secretWord = 'DOLPHIN';
let guessLetter = "x"; 
let indexOfFirst = secretWord.indexOf(guessLetter);
console.log(indexOfFirst);
// if ( indexOfFirst >= 0){
// } else if {
// }

//NOTES: if indexOfFirst's value is less than zero, then that means that the letter the player selected 
//is not in the string "secretword". So we take one life from the player, we prompt a message
//that the shark is approaching. 
// but if the value of indexOfFirst is 