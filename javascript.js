function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissor'];
    let choice = choices[Math.floor(Math.random()*choices.length)]
    console.log('Computer chooses ' + choice);
    return choice;
}

function playRound(playerSelection, computerSelection){
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();
    let result = "";
    while(p == c){
        c = getComputerChoice().toLowerCase();
    }
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
    return result;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));