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
    
}