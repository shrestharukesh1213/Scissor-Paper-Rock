let choices = ["Scissor", "Paper", "Rock"];
const button = document.querySelectorAll("button");
function selectedChoice() {
  button.forEach((choice) => {
    choice.addEventListener("click", () => {
      playRound(choice.textContent.toLowerCase(), computerSelection);
    });
  });
}
function computerChoices() {
  return choices[Math.floor(Math.random() * choices.length)];
}
const playerSelection = selectedChoice();
const computerSelection = computerChoices();
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "Rock") {
    console.log("It's a draw");
  } else if (playerSelection == "paper" && computerSelection == "Paper") {
    console.log("It's a draw");
  } else if (playerSelection == "scissor" && computerSelection == "Scissor") {
    console.log("It's a draw");
  } else if (playerSelection == "paper" && computerSelection == "Rock") {
    console.log("Player won");
    // return 1;
  } else if (playerSelection == "paper" && computerSelection == "Scissor") {
    console.log("Computer Won");
    // return 0;
  } else if (playerSelection == "scissor" && computerSelection == "Paper") {
    console.log("Player won");
    // return 1;
  } else if (playerSelection == "scissor" && computerSelection == "Rock") {
    console.log("Computer won");
    // return 0;
  } else if (playerSelection == "rock" && computerSelection == "Scissor") {
    console.log("Player won");
    // return 1;
  } else if (playerSelection == "rock" && computerSelection == "Paper") {
    console.log("Computer won");
    // return 0;
  }
}
// playRound(playerSelection, computerSelection);
// function game() {
// for (i = 0; i < 5; i++) {
// let val = playRound(playerSelection, computerSelection);
// if (val == 1) {
//   playerWins++;
// } else if (val == 0) {
//   computerWins++;
// }
// }
// if (playerWins > computerWins) {
//   console.log("You Win!!!");
// } else if (computerWins > playerWins) {
//   console.log("You Lose!!");
// } else if (computerWins == playerWins) {
//   console.log("It's a Tie!");
// }
// }
// game();
