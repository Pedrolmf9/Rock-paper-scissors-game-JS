function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    const pick = Math.floor(Math.random() * 3);
    const choice = options[pick];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection == playerSelection) {
        console.log("It's a tie!");
    }
    else if ( 
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
    ){
        console.log("Computer wins!");
    }
    else {
        console.log("YAY! You win!");
    }


}

  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));