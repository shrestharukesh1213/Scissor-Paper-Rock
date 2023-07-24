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
const singleOutput = document.querySelector("#singleOutput");
const wins = document.querySelector("#wins");
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "Rock") {
    console.log("It's a draw");
    singleOutput.textContent = `Its a draw.`;
  } else if (playerSelection == "paper" && computerSelection == "Paper") {
    console.log("It's a draw");
    singleOutput.textContent = `Its a draw`;
  } else if (playerSelection == "scissor" && computerSelection == "Scissor") {
    console.log("It's a draw");
    singleOutput.textContent = `Its a draw`;
  } else if (playerSelection == "paper" && computerSelection == "Rock") {
    console.log("Player won");
    singleOutput.textContent = `Your Win!`;
    return 1;
  } else if (playerSelection == "paper" && computerSelection == "Scissor") {
    console.log("Computer Won");
    singleOutput.textContent = `Computer Wins!`;
    return 0;
  } else if (playerSelection == "scissor" && computerSelection == "Paper") {
    console.log("Player won");
    singleOutput.textContent = `Your Win!`;
    return 1;
  } else if (playerSelection == "scissor" && computerSelection == "Rock") {
    console.log("Computer won");
    singleOutput.textContent = `Computer Wins!`;
    return 0;
  } else if (playerSelection == "rock" && computerSelection == "Scissor") {
    console.log("Player won");
    singleOutput.textContent = `Your Win!`;
    return 1;
  } else if (playerSelection == "rock" && computerSelection == "Paper") {
    console.log("Computer won");
    singleOutput.textContent = `Computer Win!`;
    return 0;
  }
}

const finalOutput = document.querySelector("#finalOutput");

function game(playerVal) {
  finalOutput.textContent = "---";
  const computerSelection = computerChoices();
  let val = playRound(playerVal, computerSelection);
  if (val == 1) {
    playerWins++;
    wins.textContent = `Player Wins = ${playerWins} \n Computer Wins = ${computerWins}`;
  } else if (val == 0) {
    computerWins++;
    wins.textContent = `Player Wins = ${playerWins} \n Computer Wins = ${computerWins}`;
  }
  if (count >= 5) {
    count = 0;
    singleOutput.textContent = "Lets Play Again!";
    if (playerWins > computerWins) {
      playerWins = 0;
      computerWins = 0;
      finalOutput.textContent = "You Win!!";
      wins.textContent = `Player Wins = ${playerWins} \n Computer Wins = ${computerWins}`;
      console.log("You Win!!!");
    } else if (computerWins > playerWins) {
      console.log("You Lose!!");
      playerWins = 0;
      computerWins = 0;
      finalOutput.textContent = "You Lose!!";
      wins.textContent = `Player Wins = ${playerWins} \n Computer Wins = ${computerWins}`;
    } else if (computerWins == playerWins) {
      console.log("It's a Tie!");
      playerWins = 0;
      computerWins = 0;
      finalOutput.textContent = "Its a Tie!";
      wins.textContent = `Player Wins = ${playerWins} \n Computer Wins = ${computerWins}`;
    }
  }
}
