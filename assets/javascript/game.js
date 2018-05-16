

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var points = 0;
var negPoints = 0;
var userGuesses = 0;
var guessesRemaining = 20;
var user;
var computerGuess;

function resetGame() {
    points = 0;
    negPoints = 0;
    userGuesses = 0;
    guessesRemaining = 20;
    document.getElementById("win").innerHTML = points;
    document.getElementById("loss").innerHTML = negPoints;
    document.getElementById("guess").innerHTML = userGuesses;
    document.getElementById("remaining").innerHTML = guessesRemaining;
    document.getElementById("winning-message").innerHTML = " ";
    startGame()
}

function startGame(){
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);
}

startGame();

document.onkeyup = function(event) {
    if (guessesRemaining >= 1 && points < 2){
    user = event.key.toLowerCase();
    guessesRemaining--;
    
        if (user) {
            userGuesses++;
        }  
        if (user === computerGuess) {
            points++; 
            startGame();
            endGame();
        }
        else if (user !== computerGuess) {
            negPoints++;
            endGame();
           
        }
    }
 
function endGame() {
    if (points === 2)  {
        document.getElementById("winning-message").innerHTML = "You Won!!!";
      

    } else if (guessesRemaining  < 1) {
        document.getElementById("winning-message").innerHTML = "You Lose...";
       
        }
    }

document.getElementById("win").innerHTML = points;
document.getElementById("loss").innerHTML = negPoints;
document.getElementById("guess").innerHTML = userGuesses;
document.getElementById("remaining").innerHTML = guessesRemaining;

  }

  



/*
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var someSentence = "This is some sentence".split(" ");

console.log(alphabet);
console.log(someSentence);

for (var i = 0; i < computerGuess.length; i++) {
        underScores.push(' _ ');
        console.log(underScores);
    }
    document.getElementById("word-blanks").innerHTML = underScores.join(" ");


*/