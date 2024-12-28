let choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
const btns = document.querySelectorAll('button');
const results = document.querySelector('.results');
const hScoreHTML = document.querySelector('.hScore h3');
const cScoreHTML = document.querySelector('.cScore h3')



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

playRound = (hChoice, cChoice) => {
    if(hChoice == 'rock' && cChoice == 'paper' || hChoice == 'paper' && cChoice == 'scissors' || hChoice == 'scissors' && cChoice == 'rock'){

        let statement = document.createElement('p')
        statement.innerText = 'You lose this round!';
        results.innerHTML = '';
        results.append(statement);

        computerScore += 1;
        cScoreHTML.innerText = computerScore;
    }
    else if(cChoice == 'rock' && hChoice == 'paper' || cChoice == 'paper' && hChoice == 'scissors' || cChoice == 'scissors' && hChoice == 'rock'){

        let statement = document.createElement('p')
        statement.innerText = 'You win this round!';
        results.innerHTML = '';
        results.append(statement);

        humanScore += 1;
        hScoreHTML.innerText = humanScore;
    }
    else if(hChoice == cChoice){

        let statement = document.createElement('p')
        statement.innerText = 'Its a draw!';
        results.innerHTML = '';
        results.append(statement);

        computerScore += 1;
        humanScore += 1;

        cScoreHTML.innerText = computerScore;
        hScoreHTML.innerText = humanScore;
    }
}

checkGame = (humanScore, computerScore) => {
    if(humanScore == 5){
        let winner = document.createElement('p')
        winner.classList.add('winner')
        winner.innerText = 'You win!';
        results.append(winner);
    }
    else if(computerScore == 5){
        let winner = document.createElement('p')
        winner.classList.add('winner')
        winner.innerText = 'Computer wins!';
        results.append(winner);
    }
    else if(humanScore == 5 && computerScore == 5){
        let winner = document.createElement('p')
        winner.classList.add('winner')
        winner.innerText = 'Its a draw!';
        results.append(winner);
    }
}

btns.forEach(btn => {
        btn.addEventListener('click', e => {
            if(humanScore < 5 && computerScore < 5){
                playRound(e.target.innerText.toLowerCase(), getRandomChoice(choices));
                checkGame(humanScore, computerScore);
            }
        });
    }
);
