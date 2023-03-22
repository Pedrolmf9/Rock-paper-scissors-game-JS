function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    const pick = Math.floor(Math.random() * 3);
    const choice = options[pick];
    return choice;
}

function playRound(playerSelection, computerSelection){
    let roundWinner = "";
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
        roundWinner = "Computer";
        return roundWinner
    }
    else {
        console.log("YAY! You win!");
        roundWinner = "Player";
        return roundWinner
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;    
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose rock, paper or scissors:");
        const computerSelection = getComputerChoice();
        match = playRound(playerSelection, computerSelection);
        if (match == "Computer"){
            computerWins++;
        }
        else if (match == "Player"){
            playerWins++;
        }
     }
     if (computerWins > playerWins){
        console.log("Computer is the final Winner!!");
     }
     else if (playerWins > computerWins){
        console.log("You are the final Winner!!");
     }
     else{
        console.log("Well,it's a tie...")
     }
}


game();