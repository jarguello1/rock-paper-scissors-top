
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



function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection;
    const computerChoice = computerSelection;

    if (playerChoice === computerChoice) {
        console.log("Draw!")
        return "Draw";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose! Paper beats Rock");
        return "computer";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log("You Lose! Scissors beats Paper");
        return "computer";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        console.log("You Lose! Rock beats Scissors");
        return "computer";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock");
        return "player";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win! Rock beats Scissors");
        return "player";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors beats Paper");
        return "player";
    }
}

function game() {

    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {

        const computerSelection = getComputerChoice();
        console.log(computerSelection)
        const playerSelection = prompt().toLowerCase();

        const result = playRound(playerSelection, computerSelection);
        if (result === "player") {
            playerWins++;
        } else if (result === "computer") {
            computerWins++;
        } 
        else {
            continue;
        }
    }
    console.log("Player Score: " + playerWins);
    console.log("Computer score " + computerWins);
}