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