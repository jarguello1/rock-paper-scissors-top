
// use random number generator to decide computers choice
// prompt user for their choice
// compare the two choices
// print result
// have a game function that repeats for 5 rounds and keeps track of score

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

const computerSelection = getComputerChoice();
console.log(computerSelection)
const playerSelection = prompt().toLowerCase();

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection;
    const computerChoice = computerSelection;

    if (playerChoice === computerChoice) {
        return "Draw!";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "You Win! Scissors beats Paper";
    }
}

console.log(computerSelection)
console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection));

function game() {
    const currentGame = playRound(playerSelection, computerSelection);
}