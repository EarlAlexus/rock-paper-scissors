function getComputerChoice() {
    let random = Math.floor(Math.random(0) * 3)

    if (random === 0) {
        random = "Rock"
    } else if (random === 1) {
        random = "Paper"
    } else {
        random = "Scissors"
    }
    return random
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors? ")

    if (choice.toLowerCase() === "rock") {
        return "Rock"
    } else if (choice.toLowerCase() === "paper") {
        return "Paper"
    } else if (choice.toLowerCase() === "scissors") {
        return "Scissors"
    } else {
        return "Wrong. Try again."
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            return `It's a draw!`
        } else if ((humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper") ||
            (humanChoice === "Rock" && computerChoice === "Scissors")) {
            humanScore++;
            return `You win! Computer loses. ${humanChoice} beats ${computerChoice}.`
        } else {
            computerScore++;
            return `You lose! Computer wins. ${computerChoice} beats ${humanChoice}.`
        }
    }

    for (let i = 0; i < 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }
    if (humanScore > computerScore) {
        return `You are the final winner! The final score is Human(${humanScore}) and Computer(${computerScore}).`
    } else if (computerScore > humanScore) {
        return `You are the loser! The final score is Human (${humanScore}) and Computer (${computerScore}).`
    } else {
        return `No one wins! It's a draw. The final score is Human (${humanScore}) and Computer (${computerScore}).`
    }
}

console.log(playGame())