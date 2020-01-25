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

// INITIALIZING GLOBAL VARIABLES

let gamesPlayed = gamesPlayedCounter.textContent;
let wins = winsCounter.textContent;
let loses = losesCounter.textContent;
let draws = drawsCounter.textContent;

let yourChoice = playerLastChoice.textContent;
let computerChoice = computerLastChoice.textContent;
let winnerIs = lastGameWinner.textContent;

// FUNCTIONS START HERE

function YUNoInitialize(){
    if (winnerIs.textContent === "THE GAME HASN'T STARTED YET"){
        return true} else {
            return false}
        }

gameStart.onclick = function(){
    gamesPlayed = gamesPlayedCounter.textContent = 0;
    wins = winsCounter.textContent = 0;
    loses = losesCounter.textContent = 0;
    draws = drawsCounter.textContent = 0;

    yourChoice = playerLastChoice.textContent = "NONE";
    computerChoice = computerLastChoice.textContent = "NONE";
    winnerIs = lastGameWinner.textContent = "N/A";
}




rockButton.onclick = function(){
    if (YUNoInitialize === true){
        alert("You have to initialize the game first...")
     } else {
        yourChoice = "rock";
        computerChoice = rollComputerChoice;
    }
}

paperButton.onclick = function(){
    if (YUNoInitialize){
        alert("You have to initialize the game first...")
    } else {
        yourChoice = "paper";
        computerChoice = rollComputerChoice;
    }
}
scissorsButton.onclick = function(){
    if (YUNoInitialize){
        alert("You have to initialize the game first...")
    } else {
        yourChoice = "scissors";
        computerChoice = rollComputerChoice;
    }
}

function rollComputerChoice(){
    alert('This does nothing yet...')
}

// CONSOLE LOGS FOR TESTING
console.log(gamesPlayed);
console.log(wins);
console.log(loses);
console.log(draws);
console.log(yourChoice);
console.log(computerChoice);
console.log(winnerIs);

