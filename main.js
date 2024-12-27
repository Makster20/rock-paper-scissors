let choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let ComputerScore = 0;



getRandomChoice = choices => {
    let randomNumber = Math.floor(Math.random() * 3).toString();
    switch(randomNumber){
        case '0':{
            return choices[0]
        }
        case '1':{
            return choices[1]
        }
        case '2':{
            return choices[2]
        }
    }
}

getHumanChoice = () => {
    while (true) {
        let humanChoice = prompt('What is your choice? (Rock, Paper, Scissors)');
        humanChoice = humanChoice.trim().toLowerCase();
        if(humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors'){
            return humanChoice;
        }
    }
}

playRound = (hChoice, cChoice) => {
    if(hChoice == 'rock' && cChoice == 'paper' || hChoice == 'paper' && cChoice == 'scissors' || hChoice == 'scissors' && cChoice == 'rock'){
        console.log('You lose this round!')
        ComputerScore += 1;
    }
    else if(cChoice == 'rock' && hChoice == 'paper' || cChoice == 'paper' && hChoice == 'scissors' || cChoice == 'scissors' && hChoice == 'rock'){
        console.log('You win this round!')
        HumanScore += 1;
    }
    else if(hChoice == cChoice){
        console.log('Its a draw!');
    }
}

playGame = () => {
    humanChoice = getHumanChoice();
    computerChoice = getRandomChoice();

    for(i = 0; i < 5; i++){
        playRound(humanScore, computerChoice);
    }

    if(humanScore > ComputerScore){
        console.log('You win!')
    }
    else if(humanScore > ComputerScore){
        console.log('You lose!')
    }
    else{
        console.log('Its a draw!')
    }
}


playGame()