///////////////////////////////////////////////////////////////////////////////'Rock', 'Scissors', 'Paper'
let rockScissorsPaper = ['rock', 'scissors', 'paper'];
function getComputerChoice(arr){
    let randomChoice = Math.floor(Math.random()*arr.length);
    return arr[randomChoice];

};

function playRound(playerSelection, computerSelection) {
    const win = 'You Win!'
    const lose = 'You Lose!'
    let lowPlayerSelection = playerSelection.toLowerCase();
    if(lowPlayerSelection == "rock" && computerSelection == 'paper'){
        return lose;
    } else if(lowPlayerSelection == "paper" && computerSelection == 'rock'){
        return win;
    } else if (lowPlayerSelection == "paper" && computerSelection == 'scissors'){
        return lose;
    } else if (lowPlayerSelection == "scissors" && computerSelection == 'paper'){
        return win;
    } else if (lowPlayerSelection == "scissors" && computerSelection == 'rock'){
        return lose;
    } else if (lowPlayerSelection == "rock" && computerSelection == 'scissors'){
        return win;
    } else {
        return 'Draw! Try again';
    }
};

// const playerSelection = "Paper";
// const computerSelection = getComputerChoice(rockScissorsPaper);
// console.log(playRound(playerSelection, computerSelection));
function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt('Write your selection');
        let computerSelection = getComputerChoice(rockScissorsPaper);
        let result = playRound(playerSelection, computerSelection);
        if (result === 'You Win!'){
            playerPoints += 1
            console.log('You Win!');
        } else if (result === 'You Lose!'){
            computerPoints += 1;
            console.log('You Lose!');
        }
    }

    if(playerPoints > computerPoints){
        console.log('Total: You Win!');
    } else if(playerPoints < computerPoints){
        console.log('Total: You Lose!');
    } else {
        console.log('Draw!')
    }

};
console.log(game());
