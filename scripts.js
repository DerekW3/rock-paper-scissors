const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

const results = document.querySelector("#results");

let wins = 0;
let losses = 0;

buttonRock.addEventListener("click", () => {
  playRound("rock");
});
buttonPaper.addEventListener("click", () => {
  playRound("paper");
});
buttonScissors.addEventListener("click", () => {
  playRound("scissors");
});

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

function playRound(playerSelection) {
  playerSelection =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  const computerSelection = getComputerChoice();
  const result = getWinner(playerSelection, computerSelection);
  if (result === "Tie") {
    results.textContent = "Tie! Try Again!";
  } else if (result === "Win") {
    results.textContent = "You Won!";
    wins++;
    if (wins + losses === 5) {
      results.textContent = "You Won The Game!";
      wins = 0;
      losses = 0;
    }
  } else if (result === "Loss") {
    results.textContent = "You Loss!";
    losses++;
    if (wins + losses === 5) {
      results.textContent = "You Loss The Game!";
      wins = 0;
      losses = 0;
    }
  }
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
  }
}
