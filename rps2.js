function computerPlay(){
    num = Math.random() * 2
    fixednum = Math.round(num)

    if(fixednum == 0){
        answer = "rock"
    } else if(fixednum == 1){
        answer = "paper"
    } else if(fixednum == 2){
        answer = "scissors"
    }
    return answer
}


function playRound(playerSelection, computerSelection){
    playerSelection = window.prompt("Rock, Paper, Scissors...Shoot!")
    playerSelection = playerSelection.toLowerCase()
    console.log("The player has selected " + playerSelection)
    computerSelection = computerPlay()
    console.log("The computer has selected " + computerSelection)

    if(playerSelection === "rock" && computerSelection === "paper"){
        finalAnswer = "You Lose!  Paper covers rock"
        score = 0
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        finalAnswer = "You Win! Paper covers rock"
        score = 1
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        finalAnswer = "You Lose! Rock crushes scissors"
        score = 0
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        finalAnswer = "You Win! Rock crushes scissors"
        score = 1
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        finalAnswer = "You Win! Scissors cuts paper"
        score = 1
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        finalAnswer = "You Lose! Scissors cuts paper"
        score = 0
    }else{
        finalAnswer = "It is a tie!"
        score = 2
    }

    console.log(finalAnswer)
    console.log(score)
    return score
}

function game(){
    round = 0
    playerScore = 0
    computerScore = 0

    for( i = 0; i < 5; i++){
        round++
        console.log("Round: " + round)
        playRound()
        
        if(score === 1){
            playerScore++
            console.log("Player: " + playerScore + " Computer: " + computerScore)
        }else if(score === 0){
            computerScore++
            console.log("Player: " + playerScore + " Computer: " + computerScore)
        }else {
            console.log("Player: " + playerScore + " Computer: " + computerScore)
        }

        
    }
}