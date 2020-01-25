//BUTTONS

const gameStart = document.getElementById('startRestartGame');
const rockButton = document.getElementById('playRock');
const paperButton = document.getElementById('playPaper');
const scissorsButton = document.getElementById('playScissors');

// OUTPUT SPANS

const gamesPlayedCounter = document.getElementById("gamesPlayedCounter");
const winsCounter = document.getElementById("winsCounter");
const losesCounter = document.getElementById("losesCounter");
const drawsCounter = document.getElementById("drawsCounter");
// THE HORIZONTAL LINE WILL  SPLIT THE OUTPUTS HERE
const playerLastChoice = document.getElementById("playerLastChoice");
const computerLastChoice = document.getElementById("computerLastChoice");
const lastGameWinner = document.getElementById("lastGameWinner");

// INITIALIZING VARIABLES

let gamesPlayed = gamesPlayedCounter.textContent;
let wins = winsCounter.textContent;
let loses = losesCounter.textContent;
let draws = drawsCounter.textContent;

let yourChoice = playerLastChoice.textContent;
let computerChoice = computerLastChoice.textContent;
let winnerIs = lastGameWinner.textContent;



// CONSOLE LOGS FOR TESTING
console.log(gamesPlayed);
console.log(wins);
console.log(loses);
console.log(draws);
console.log(yourChoice);
console.log(computerChoice);
console.log(winnerIs);

/* BUTTON TESTING SPACE      * /
gameStart.onclick = function(){
    alert("Chuj ci w dupę!")
}
rockButton.onclick = function(){
    alert("Ruchaj kamień z dziurką!")
}
paperButton.onclick = function(){
    alert("Może chusteczkę?")
}
scissorsButton.onclick = function(){
    alert("Zaraz Ci obetniemy XD")
}
 / *  BUTTON TESTING SPACE END */