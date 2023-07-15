let choices = ["Scissor", "Paper", "Rock"];
let playerWins = 0,
  computerWins = 0;
function computerChoices() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == "rock" && computerSelection == "Rock") {
    console.log("It's a draw");
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "Paper"
  ) {
    console.log("It's a draw");
  } else if (
    playerSelection.toLowerCase() == "scissor" &&
    computerSelection == "Scissor"
  ) {
    console.log("It's a draw");
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "Rock"
  ) {
    console.log("Player won");
    return 1;
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "Scissor"
  ) {
    console.log("Computer Won");
    return 0;
  } else if (
    playerSelection.toLowerCase() == "scissor" &&
    computerSelection == "Paper"
  ) {
    console.log("Player won");
    return 1;
  } else if (
    playerSelection.toLowerCase() == "scissor" &&
    computerSelection == "Rock"
  ) {
    console.log("Computer won");
    return 0;
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection == "Scissor"
  ) {
    console.log("Player won");
    return 1;
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection == "Paper"
  ) {
    console.log("Computer won");
    return 0;
  }
}
function game() {
  for (i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your move: ");
    const computerSelection = computerChoices();
    let val = playRound(playerSelection, computerSelection);
    if (val == 1) {
      playerWins++;
    } else if (val == 0) {
      computerWins++;
    }
  }
  if (playerWins > computerWins) {
    console.log("You Win!!!");
  } else if (computerWins > playerWins) {
    console.log("You Lose!");
  } else if (computerWins == playerWins) {
    console.log("It's a Tie!");
  }
}
game();
