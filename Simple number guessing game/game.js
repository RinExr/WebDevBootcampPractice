//create secret number

var secretNumber = 4;

//as user for guess

//var guess = Number(prompt("Guess a number"));
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
//check guess

if (guess === secretNumber ){
  alert("You got it RIGHT!!");
}

//otherwise , check if higher

else if (guess > secretNumber){
  alert("Too high , guess again");
}

//otherwise , check if lower

else{
  alert("Too low , guess again");
}