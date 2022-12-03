//function to guess a random number
function gessRandomNumber(guessVall) {
  let randomlyGeneratedNumber = Math.floor(Math.random() * 5) + 1;
  if (guessVall == randomlyGeneratedNumber) {
    return console.log(" You guessed a random Number");
  } else {
    return console.log("Ooops! Try again");
  }
}
gessRandomNumber(4);
