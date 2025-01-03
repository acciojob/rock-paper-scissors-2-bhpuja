//your code here
const gameNumberInput = document.getElementById("game-number");
const playGameButton = document.getElementById("play-game");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const computerChoiceSpan = document.getElementById("computer-choice");
const roundResultSpan = document.getElementById("round-result");
const roundsLeftSpan = document.getElementById("rounds-left");
const userPointsSpan = document.getElementById("user-points");
const computerPointsSpan = document.getElementById("computer-points");
const gameResultSpan = document.getElementById("game-result");

let roundsLeft = 0;
let userPoints = 0;
let computerPoints = 0;

// Generate computer choice
window.computerChoose = () => {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  return choices[Math.floor(Math.random() * 3)];
};

// Determine the winner of the round
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "TIE";
  }
  if (
    (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (userChoice === "PAPER" && computerChoice === "ROCK") ||
    (userChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    userPoints++;
    return "WON";
  }
  computerPoints++;
  return "LOSE";
}

// Handle game logic
function playRound(userChoice) {
  if (roundsLeft > 0) {
    const computerChoice = window.computerChoose();
    computerChoiceSpan.textContent = computerChoice;

    const roundResult = determineWinner(userChoice, computerChoice);
    roundResultSpan.textContent = roundResult;

    roundsLeft--;
    roundsLeftSpan.textContent = roundsLeft;
    userPointsSpan.textContent = userPoints;
    computerPointsSpan.textContent = computerPoints;

    if (roundsLeft === 0) {
      if (userPoints > computerPoints) {
        gameResultSpan.textContent = "WON";
      } else if (userPoints < computerPoints) {
        gameResultSpan.textContent = "LOSE";
      } else {
        gameResultSpan.textContent = "TIE";
      }
    }
  }
}

// Start the game
playGameButton.addEventListener("click", () => {
  roundsLeft = parseInt(gameNumberInput.value) || 0;
  if (roundsLeft > 0) {
    gameResultSpan.textContent = "";
    userPoints = 0;
    computerPoints = 0;
    roundsLeftSpan.textContent = roundsLeft;
    userPointsSpan.textContent = userPoints;
    computerPointsSpan.textContent = computerPoints;
    roundResultSpan.textContent = "";
    computerChoiceSpan.textContent = "";
  } else {
    alert("Please enter a valid number of rounds!");
  }
});

// User selects rock, paper, or scissors
rockButton.addEventListener("click", () => playRound("ROCK"));
paperButton.addEventListener("click", () => playRound("PAPER"));
scissorsButton.addEventListener("click", () => playRound("SCISSORS"));
