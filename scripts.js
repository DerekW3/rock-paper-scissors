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
  playerSelection =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
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

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

buttonRock.addEventListener(
  "click",
  playRound.bind("rock", getComputerChoice())
);
buttonPaper.addEventListener(
  "click",
  playRound.bind("paper", getComputerChoice())
);
buttonScissors.addEventListener(
  "click",
  playRound.bind("scissors", getComputerChoice())
);

console.log(game());
function game() {
  let wins = 0;
  let input = prompt("Input your choice!", "");
  let result = playRound(input, getComputerChoice());

  console.log(result);
  if (result === "Tie") {
    while (result === "Tie") {
      console.log("Tie: Playing Again");
      input = prompt("Input your choice!", "");
      result = playRound(input, getComputerChoice());
    }
  }
  if (result === "Win") {
    wins++;
  }

  if (wins >= 3) {
    return "You Won!";
  } else {
    return "You Loss!";
  }
}
