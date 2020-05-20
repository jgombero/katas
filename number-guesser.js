let prompt = require("prompt-sync")();

const checkNumber = function() {
  let guess = prompt("Guess a number: ");
  const answer = Math.floor(Math.random() * 100) + 1;
  let userGuesses = []; 
  for (let i=0; i!=answer; i++) {
    if (isNaN(guess)) {
      console.log('Not a number! Try again!');
      guess = prompt("Guess a number: ");
    } else if (userGuesses.includes(guess)) {
        console.log('Already Guessed!');
        guess = prompt('Guess a number: ');
    } else if (guess < answer) {
      userGuesses.push(guess);
      console.log('Too low!');
      guess = prompt("Guess a number: ");
    } else if (guess > answer) {
      userGuesses.push(guess);
      console.log('Too high!');
      guess = prompt('Guess a number: ');
    }
  }
  return console.log("You got it! You took " + (userGuesses.length+1) + " attempts!");
}
checkNumber();