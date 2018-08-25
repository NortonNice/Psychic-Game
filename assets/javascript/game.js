//javascript instructions

//letter choice array:
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//starting variables
var win = 0;
var loss = 0;
var guessLeft = 9;
var guessSoFar = [];

//game reset, new game
function reset (){
    guessLeft = 9;
    guessSoFar = [];
    computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    console.log (computerGuess);
}

reset();
//winner, now new letter
function newword (){
    guessSoFar = [];
    guessLeft = 9;
    computerGuess = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    console.log (computerGuess);
}

//user input
document.onkeyup  = function(event) {
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

if (!/[a-z]/.test(userGuess)){
    alert ("Your guess must be a letter.");
    //don't take away a guess
    guessLeft++;
    loss--;
}
//unguessed letter array/double guessed alert
if (guessSoFar.indexOf(userGuess) === -1){
    guessSoFar.push(userGuess);
}

else {
    alert ("You guessed this letter already. Please select another letter");
    guessLeft++;
    //loss--;
}

//keeping score
if (userGuess === computerGuess) {
    win++;
    alert ("Nice work, you guessed correctly. Let's play again!");
    newword();
}
else {
    guessLeft --;
}
if (guessLeft === 0){
    loss++;
    alert ("Sorry, you lose. Let's play again!");
    reset();
}

//updating html on screen
document.querySelector('#win').innerHTML = "Win: " + win;
document.querySelector('#loss').innerHTML = "Loss: " +loss;
document.querySelector('#guessleft').innerHTML = "Number of guesses left: " + guessLeft;
document.querySelector('#guessofar').innerHTML = " Your guesses so far: " + guessSoFar;

};
                    
