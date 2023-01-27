function getComputerChoice() {
    let paramsArray = ['rock', 'paper', 'scissors']
    let choice = Math.floor(Math.random()*3)
    return paramsArray[choice]
}

let roundLog = document.querySelector('#round_log')
let btn_r = document.querySelector('#btn_r')
let btn_p = document.querySelector('#btn_p')
let btn_s = document.querySelector('#btn_s')

let computerInput = getComputerChoice()
let playerScore = 0
let computerScore = 0

function scoreUpdate(){    
    const p = document.createElement("p");
    p.innerText = playerScore + '/' + computerScore
    roundLog.appendChild(p);
}

function winnerCheck(){
    if(playerScore >= 5){
        return 'PLAYER'
    } else if(computerScore >= 5){
        return 'COMPUTER'
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    
    if(computerScore < 5 && playerScore < 5){
        if(playerSelection === computerSelection){
            console.log('TIE')

            const p = document.createElement("p");
            p.innerText = 'TIE'
            roundLog.appendChild(p);

            return 'TIE'
        } else if(playerSelection === 'rock' && computerSelection === 'paper'){
            computerScore++
            scoreUpdate()
            console.log('COMPUTER WON ' + playerScore + '/' + computerScore)

            const p = document.createElement("p");
            p.innerText = 'COMPUTER WON'
            roundLog.appendChild(p);

            return 'COMPUTER WON'
        } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
            playerScore++
            scoreUpdate()
            console.log('PLAYER WON ' + playerScore + '/' + computerScore)

            const p = document.createElement("p");
            p.innerText = 'PLAYER WON'
            roundLog.appendChild(p);

            return 'PLAYER WON'
        } else if(playerSelection === 'paper' && computerSelection === 'rock'){
            playerScore++
            scoreUpdate()
            console.log('PLAYER WON ' + playerScore + '/' + computerScore)

            const p = document.createElement("p");
            p.innerText = 'PLAYER WON'
            roundLog.appendChild(p);
            
            return 'PLAYER WON'
        } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
            computerScore++
            scoreUpdate()
            console.log('COMPUTER WON ' + playerScore + '/' + computerScore)

            const p = document.createElement("p");
            p.innerText = 'COMPUTER WON'
            roundLog.appendChild(p);

            return 'COMPUTER WON'
        } else if(playerSelection === 'scissors' && computerSelection === 'rock'){
            computerScore++
            scoreUpdate()
            console.log('COMPUTER WON ' + playerScore + '/' + computerScore)

            const p = document.createElement("p");
            p.innerText = 'COMPUTER WON'
            roundLog.appendChild(p);

            return 'COMPUTER WON'
        } else if(playerSelection === 'scissors' && computerSelection ==='paper'){
            playerScore++
            scoreUpdate()
            console.log('PLAYER WON ' + playerScore + '/' + computerScore)

            const p = document.createElement("p");
            p.innerText = 'PLAYER WON'
            roundLog.appendChild(p);

            return 'PLAYER WON'
        }
    } else{
        const p = document.createElement("p");
        p.innerText = 'GAME OVER ' + winnerCheck() + ' IS WINNER!'
        roundLog.appendChild(p);
        console.log('GAME OVER ' + winnerCheck() + ' IS WINNER!')
    }

}


let rockRound = () =>{  
    playRound('rock', getComputerChoice())
}

let paperRound = () =>{
    playRound('paper', getComputerChoice())
}

let scissorsRound = () =>{
    playRound('scissors', getComputerChoice())
}