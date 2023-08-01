let playerChoice = "";
let result = "";
let score = {
  wins: 0,
  losses: 0,
  ties: 0,
};
function pickComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else if (computerChoice === 3) {
    return "scissors";
  }
}
function PlayGame(playerChoice) {
  const computerChoice = pickComputerChoice();
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      result = "Tie";
      score.ties++;
    } else if (computerChoice === "paper") {
      result = "You lose";
      score.losses++;
    } else if (computerChoice === "scissors") {
      result = "You win";
      score.wins++;
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      result = "You win";
      score.wins++;
    } else if (computerChoice === "paper") {
      result = "Tie";
      score.ties++;
    } else if (computerChoice === "scissors") {
      result = "You lose";
      score.losses++;
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      result = "You lose";
      score.losses++;
    } else if (computerChoice === "paper") {
      result = "You win";
      score.wins++;
    } else if (computerChoice === "scissors") {
      result = "Tie";
      score.ties++;
    }
  }
  return result;
}
let isAutoPlaying = false;
let intervalID = 0;
document.querySelector(".auto-play-button").addEventListener("click", () => {
  if (isAutoPlaying === false) {
    isAutoPlaying = true;
    intervalID = setInterval(() => {
      PlayGame(pickComputerChoice());
      document.querySelector(".js-result").innerHTML = result;
      document.querySelector(
        ".js-score"
      ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
    }, 1000);
  } else if (isAutoPlaying === true) {
    clearInterval(intervalID);
    isAutoPlaying = false;
  }
});
document.querySelector(".reset-button").addEventListener("click", () => {
  document.querySelector(".reset-score-confirmation").innerHTML =
    'Are you sure that you want to reset the score <button class="yes-button">Yes</button><button class="no-button">No</button>';
  document.querySelector(".yes-button").addEventListener("click", () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    document.querySelector(".reset-score-confirmation").innerHTML = "";
    document.querySelector(
      ".js-score"
    ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
  });
  document.querySelector(".no-button").addEventListener("click", () => {
    document.querySelector(".reset-score-confirmation").innerHTML = "";
    document.querySelector(
      ".js-score"
    ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
  });
});
document.querySelector(".rock-button").addEventListener("click", () => {
  PlayGame("rock");
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
});
document.querySelector(".paper-button").addEventListener("click", () => {
  PlayGame("paper");
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
});
document.querySelector(".scissors-button").addEventListener("click", () => {
  PlayGame("scissors");
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
});
