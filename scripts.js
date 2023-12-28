function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    return getWinner(playerSelection, computerSelection);
}

function getWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return "Loss";
        } else {
            return "Win";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            return "Loss";
        } else {
            return "Win";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return "Loss";
        } else {
            return "Win";
        }
    } else {
        return "Invalid Input";
    }
}