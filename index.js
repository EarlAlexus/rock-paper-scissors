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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("It's a draw!")
    } else if ((humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Rock" && computerChoice === "Scissors")) {
        humanScore++;
        console.log(`You win! Computer loses. ${humanChoice} beats ${computerChoice}.`)
    } else {
        computerScore++;
        console.log(`You lose! Computer wins. ${computerChoice} beats ${humanChoice}.`)
    }
}