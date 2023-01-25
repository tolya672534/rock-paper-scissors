function getComputerChoice() {
    let paramsArray = ['rock', 'paper', 'scissors']
    let choice = Math.floor(Math.random()*3)
    return paramsArray[choice]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if(playerSelection === computerSelection){
        return 'TIE'
    } else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'COMPUTER WON'
    } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'PLAYER WON'
    } else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return 'PLAYER WON'
    } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'COMPUTER WON'
    } else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'COMPUTER WON'
    } else if(playerSelection === 'scissors' && computerSelection ==='paper'){
        return 'PLAYER WON'
    }
}

let playerInput = prompt()
let computerInput = getComputerChoice()

console.log(playRound(playerInput, computerInput))