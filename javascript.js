function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)]
    console.log('Computer chooses ' + choice);
    return choice;
}

function playRound(playerSelection, computerSelection){
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();
    let result = "";
    if(p == 'rock'){
        if(c == 'paper')result = "You Lose! Paper beats Rock";
        else result = "You Win! Rock beats Scissor";
    }
    else if(p == 'paper'){
        if(c == 'scissor')result = "You Lose! Scissor beats Paper";
        else result = "You Win! Paper beats Rock";
    }
    else if(p == 'scissor'){
        if(c == 'rock')result = "You Lose! Rock beats Scissor";
        else result = "You Win! Scissor beats Rock";
    }
    console.log(result);
    return result;
}

document.addEventListener('DOMContentLoaded', function() {
    var choices = document.querySelectorAll('#choices button');
    choices.forEach(function(button) {
        button.addEventListener('click', function() {
            playRound(button.id, getComputerChoice());
        });
    });
});