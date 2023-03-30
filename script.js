function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    const pick = Math.floor(Math.random() * 3);
    const choice = options[pick];
    return choice;
}

function playRound(playerSelection){  
    let computerSelection = getComputerChoice();
    
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
        resultCountComp.textContent = "Computer: " + computerWins;
        resultText.textContent = "Computer wins this round! " + computerWins + " point(s) for computer";
        results.replaceChildren(resultText.textContent);
        if (computerWins == 5){
            finalMsg.textContent = "Computer is the final Winner!!";
            results.appendChild(finalMsg);
            playerWins = 0;
            computerWins = 0;
            resultCountPlayer.textContent = "Player: " + playerWins;
            resultCountComp.textContent = "Computer: " + computerWins;  
        }
    }
    else {
        playerWins += 1;
        resultCountPlayer.textContent = "Player: " + playerWins;
        resultText.textContent = "YAY! You won this round! " + playerWins + " point(s) for you";
        results.replaceChildren(resultText.textContent);        
        if (playerWins == 5){
            finalMsg.textContent = "You are the final Winner!!";
            results.appendChild(finalMsg);
            playerWins = 0;
            computerWins = 0;
            resultCountPlayer.textContent = "Player: " + playerWins;
            resultCountComp.textContent = "Computer: " + computerWins;    
         }
        }
}

function getButtom(){
    const buttons = document.querySelectorAll('img');

    buttons.forEach((img) => {
        img.addEventListener('click', () =>{
        playRound(img.id);
        });
    });

}

let playerWins = 0;
let computerWins = 0;
const counters = document.querySelector('.counters');
const resultCountComp = document.createElement('p');
const resultCountPlayer = document.createElement('p');
resultCountPlayer.textContent = "Player: " + playerWins;
resultCountComp.textContent = "Computer: " + computerWins;
counters.appendChild(resultCountComp);
counters.appendChild(resultCountPlayer);
const results = document.querySelector('.results');
const resultText = document.createElement('p');
resultText.textContent = 'Choose your weapon!';
results.appendChild(resultText);
const finalMsg = document.createElement('p');
finalMsg.classList.add("final");

getButtom();