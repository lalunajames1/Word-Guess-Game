

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var userGuesses = 0;
var guessesRemaining = 50;
var user;
var computerGuess;

function resetGame() {
    wins = 0;
    losses = 0;
    userGuesses = 0;
    guessesRemaining = 50;
    document.getElementById("win").innerHTML = wins;
    document.getElementById("loss").innerHTML = losses;
    document.getElementById("guess").innerHTML = userGuesses;
    document.getElementById("remaining").innerHTML = guessesRemaining;
    startGame()
}

function startGame(){
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);
}

startGame();

document.onkeyup = function(event) {
    if (guessesRemaining >= 1){
    user = event.key.toLowerCase();
    guessesRemaining--;
    
        if (user) {
            userGuesses++;
        }  
        if (user === computerGuess) {
            wins++; 
            startGame();
            endGame();
              
        } 
        else if (user !== computerGuess) {
            losses++;
            endGame();
           
        }
    }
 
function endGame() {
    if (wins === 2)  {
        document.getElementById("winning-message").innerHTML = "You Won";
        resetGame()

    } else if (guessesRemaining  < 1) {
        document.getElementById("winning-message").innerHTML = "You Lose";
        resetGame()
       
        }
   
    }

document.getElementById("win").innerHTML = wins;
document.getElementById("loss").innerHTML = losses;
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