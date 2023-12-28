function getComputerChoice(){
    var choices = ['Rock', 'Paper', 'Scissor'];
    var choice = choices[Math.floor(Math.random()*choices.length)]
    console.log('Computer chooses ' + choice);
    return choice;
}