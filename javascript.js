document.addEventListener('DOMContentLoaded', function() {
    const choices = document.querySelectorAll('#choices button');
    const playerScoreboard = document.querySelector('#playerScore');
    const computerScoreboard = document.querySelector('#computerScore');
    const winner = document.querySelector('#winner');
    let playerScore = 0, computerScore = 0;

    choices.forEach(function(button) {
        button.addEventListener('click', function() {
            alert(playRound(button.id, getComputerChoice()));
        });
    });

    function getComputerChoice(){
        let choices = ['Rock', 'Paper', 'Scissors'];
        let choice = choices[Math.floor(Math.random()*choices.length)]
        //console.log('Computer chooses ' + choice);
        alert('Computer chooses ' + choice);
        return choice;
    }
    
    function playRound(playerSelection, computerSelection){
        let p = playerSelection.toLowerCase();
        let c = computerSelection.toLowerCase();
        let result = "";
        if(p == c) return "DRAW";
        if(p == 'rock'){
            if(c == 'paper'){
                result = "You Lose! Paper beats Rock";
                computerScore++;
            }
            else {
                result = "You Win! Rock beats Scissors";
                playerScore++;
            }
        }
        else if(p == 'paper'){
            if(c == 'scissors'){
                result = "You Lose! Scissors beats Paper";
                computerScore++;
            }
            else {
                result = "You Win! Paper beats Rock";
                playerScore++;
            }
        }
        else if(p == 'scissors'){
            if(c == 'rock'){
                result = "You Lose! Rock beats Scissors";
                computerScore++;
            }
            else {
                result = "You Win! Scissors beats Paper";
                playerScore++;
            }
        }
        //console.log(result);
    
        playerScoreboard.textContent = playerScore;
        computerScoreboard.textContent = computerScore;
        
        if(playerScore == 5)winner.textContent = "You Win!"
        else if(computerScore == 5)winner.textContent = "You Lose."
        
        return result;
    }
});