let playerScore = 0;
let computerScore = 0;
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");
const compSelect = document.getElementById("computerSelect");
const playerSelect = document.getElementById("playerSelect");
const result = document.getElementById("result");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", (e) => {
  startFlow(rock.id);
});
paper.addEventListener("click", (e) => {
  startFlow(paper.id);
});
scissors.addEventListener("click", (e) => {
  startFlow(scissors.id);
});

function startFlow(playerSelection) {
  console.log(playerSelection);
  const winner = selection(playerSelection);
  const resultMsg = winner.winner;
  const compMov = winner.compMove;
  displaySelection("player", playerSelection, result);
  displaySelection("computer", compMov, result);
  scoreBoard(resultMsg);
  result.innerText = resultMsg;
  endGame();
}

function selection(playerSelection) {
  let computer = computerPlay();
  let winner = playRound(playerSelection, computer);
  return {
    winner: winner,
    compMove: computer,
  };
}

function computerPlay() {
  let random = Math.floor(Math.random() * 3) + 1;
  let value;
  switch (random) {
    case 1:
      value = "rock";
      break;
    case 2:
      value = "paper";
      break;
    default:
      value = "scissors";
  }
  return value;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "Player won!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "Player won!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "Player won!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "Computer won!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "Computer won!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "Computer won!";
  }
}

function displaySelection(player, selection, result) {
  if (player === "player") {
    playerSelect.innerHTML = `<i class="fas fa-hand-${selection}"></i>`;
  } else {
    compSelect.innerHTML = `<i class="fas fa-hand-${selection}"></i>`;
  }
}

function scoreBoard(result) {
  if (result === "Player won!") {
    playerScore++;
  } else if (result === "Computer won!") {
    computerScore++;
  }
  pScore.innerText = playerScore;
  cScore.innerText = computerScore;
}

function endGame() {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      result.innerText = "Player is the Winner! Congratulations!";
    } else {
      result.innerText = "Computer is the Winner! You Lose!";
    }
    setTimeout(function () {
      location.reload();
    }, 3000);
  }
}
