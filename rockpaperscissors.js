
const container = document.querySelector('#results');
const winnerBox = document.querySelector('#winner');
const resetBtn = document.querySelector('#reset');
const buttons = document.querySelectorAll('button');

//create dom element to append results
const content = document.createElement('div');
content.classList.add('content');

//refresh page for new game
resetBtn.addEventListener('click',() => location.reload());

// use random number generator to get computer choice
let randomNumber = Math.floor(Math.random()*100) + 1;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*100) + 1;
    if (randomNumber > 0 && randomNumber < 34) {
        return "rock";
    } else if (randomNumber >= 34 && randomNumber < 67) {
        return "paper";
    } else if (randomNumber >= 67 && randomNumber <= 100) {
        return "scissors"
    }
}

// get player choice from button pressed
// Add points accordingly depending on who wins
// check for a winner at the end of every round
function playRound(playerSelection) {
    const playerChoice = playerSelection;
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        document.getElementById("gameResults").textContent = "Draw!"
        return "draw";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        document.getElementById("gameResults").textContent = "You Lose! Paper beats Rock";
        computerWins++;
        document.getElementById("computerScore").textContent = computerWins;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        document.getElementById("gameResults").textContent = "You Lose! Scissors beats Paper";
        computerWins++;
        document.getElementById("computerScore").textContent = computerWins;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        document.getElementById("gameResults").textContent = "You Lose! Rock beats Scissors";
        computerWins++;
        document.getElementById("computerScore").textContent = computerWins;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        document.getElementById("gameResults").textContent = "You win! Paper beats Rock";
        playerWins++;
        document.getElementById("playerScore").textContent = playerWins;
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        document.getElementById("gameResults").textContent = "You Win! Rock beats Scissors";
        playerWins++;
        document.getElementById("playerScore").textContent = playerWins;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        document.getElementById("gameResults").textContent = "You Win! Scissors beats Paper";
        playerWins++;
        document.getElementById("playerScore").textContent = playerWins;
    }
    checkForWinner()
}


// check if either player has reached the top score of 5
// if they have display winner and turn off buttons
function checkForWinner() {
    if (playerWins === 5) { 
        content.textContent = 'You Win!!\nReset to play again.';
        winnerBox.appendChild(content);
        buttons.forEach(button => {
            button.removeEventListener('click', getPlayerChoice);
          });
    } else if (computerWins === 5) {
        content.textContent = 'You Lose...\nReset to play again.';
        winnerBox.appendChild(content);
        buttons.forEach(button => {
            button.removeEventListener('click', getPlayerChoice);
          });
    }
}

//placeholder variables for scores
let playerWins = 0;
let computerWins = 0;

// event listener for selection buttons
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', getPlayerChoice);
});

// function for button pressing event
function getPlayerChoice(e) {
    let playerSelection = (e.target.id);
    playerChoice  = e.target.textContent;
    playRound(playerSelection)
}


