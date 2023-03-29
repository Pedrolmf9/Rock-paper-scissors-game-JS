let playerWins = 0;
let computerWins = 0;

function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    const pick = Math.floor(Math.random() * 3);
    const choice = options[pick];
    return choice;
}

function playRound(playerSelection){
    const results = document.querySelector('.results');
    const resultText = document.createElement('p');
    results.appendChild(resultText);

    let computerSelection = getComputerChoice();
    let roundWinner = "";
    
    if (computerSelection == playerSelection) {
        resultText.textContent = "It's a tie!";
        results.replaceChildren(resultText.textContent);
    }
    else if ( 
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
    ){

        computerWins += 1;
        resultText.textContent = "Computer wins this round! " + computerWins + " point(s) for computer";
        results.replaceChildren(resultText.textContent);
        if (computerWins == 5){
            resultText.textContent = "Computer is the final Winner!!";
            results.appendChild(resultText);
            playerWins = 0;
            computerWins = 0;
        }
    }
    else {
        playerWins += 1;
        resultText.textContent = "YAY! You won this round! " + playerWins + " point(s) for you";
        results.replaceChildren(resultText.textContent);        
        if (playerWins == 5){
            resultText.textContent = "You are the final Winner!!";
            results.appendChild(resultText);            
            playerWins = 0;
            computerWins = 0;
         }
    }
}

function getButtom(){
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () =>{
            playRound(button.id);
        });
    });

}

getButtom();