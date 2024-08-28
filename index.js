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
    let humanChoice = prompt("Rock, Paper, or Scissors? ")

    if (humanChoice.toLowerCase() === "rock") {
        return "Rock"
    } else if (humanChoice.toLowerCase() === "paper") {
        return "Paper"
    } else if (humanChoice.toLowerCase() === "scissors") {
        return "Scissors"
    } else {
        return "Wrong. Try again."
    }
}

let humanScore = 0;
let computerScore = 0;

