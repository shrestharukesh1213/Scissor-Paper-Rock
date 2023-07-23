let choices = ["Scissor", "Paper", "Rock"];
const button = document.querySelectorAll("button");
let playerWins = 0,
  computerWins = 0,
  count = 0;
function selectedChoice() {
  button.forEach((choice) => {
    choice.addEventListener("click", () => {
      count++;
      game(choice.textContent.toLowerCase());
    });
  });
}
function computerChoices() {
  return choices[Math.floor(Math.random() * choices.length)];
}
const playerSelection = selectedChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "Rock") {
    console.log("It's a draw");
  } else if (playerSelection == "paper" && computerSelection == "Paper") {
    console.log("It's a draw");
  } else if (playerSelection == "scissor" && computerSelection == "Scissor") {
    console.log("It's a draw");
  } else if (playerSelection == "paper" && computerSelection == "Rock") {
    console.log("Player won");
    return 1;
  } else if (playerSelection == "paper" && computerSelection == "Scissor") {
    console.log("Computer Won");
    return 0;
  } else if (playerSelection == "scissor" && computerSelection == "Paper") {
    console.log("Player won");
    return 1;
  } else if (playerSelection == "scissor" && computerSelection == "Rock") {
    console.log("Computer won");
    return 0;
  } else if (playerSelection == "rock" && computerSelection == "Scissor") {
    console.log("Player won");
    return 1;
  } else if (playerSelection == "rock" && computerSelection == "Paper") {
    console.log("Computer won");
    return 0;
  }
}
const div = document.querySelector("#output");
div.appendChild(content);
function game(playerVal) {
  const computerSelection = computerChoices();
  let val = playRound(playerVal, computerSelection);
  if (val == 1) {
    playerWins++;
  } else if (val == 0) {
    computerWins++;
  }
  if (count >= 5) {
    if (playerWins > computerWins) {
      div.textContent = "You Win!!";
      console.log("You Win!!!");
    } else if (computerWins > playerWins) {
      console.log("You Lose!!");
      div.textContent = "You Lose!!";
    } else if (computerWins == playerWins) {
      console.log("It's a Tie!");
      div.textContent = "Its a Tie!";
    }
  }
}
