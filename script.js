// accessing button from HTMl
const fistButton = document.querySelector('.fist')
const handButton = document.querySelector('.hand')
const scissorButton = document.querySelector('.scissor')

//Function to generate random choice
function computerSelection() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    // return choice;
    switch (computerChoice) {
        case 1:
            computerResult = "Rock"
            break;
        case 2:
            computerResult = "Paper"
            break;
        case 3:
            computerResult = "Sciessor";
            break;
    }
    return computerResult;
}

// initialize score of human and computer
let humanScore = 0;
let computerScore = 0;

//Function for play game in loop five time
function game(playerSelection){
    const gameresults = document.querySelector('#game-results')
    let computerResopnse = computerSelection();
    let humanResponse = playerSelection;
    // Match tie
    if (computerResopnse === humanResponse) {
           gameresults.textContent = `"Match is tie"`
    }
    //Human winnig possiblity
    else if (computerResopnse === "Rock" && humanResponse === "Paper" ||
            computerResopnse === "Sciessor" && humanResponse === "Rock" ||
            computerResopnse === "Paper" && humanResponse === "Sciessor") {
            gameresults.textContent = `You Win! ${humanResponse} beats ${computerResopnse}`
            humanScore++;
    }
    //Computer Winnig possiblity
    else{
        gameresults.textContent = `You Lost! ${computerResopnse} beats ${humanResponse}`
        computerScore++;
    }     
        scoreCheck();
}
// function declare the winner of the match
function finalResult(){
    const gameresults = document.querySelector('#game-results')
    if(humanScore === 5){
        gameresults.textContent = `You win with score ${humanScore}`
        restart()
    }
    else if(computerScore === 5){
        gameresults.textContent = `Computer win with score ${computerScore}`
        restart()
    }
}

function restart(){
    const section = document.querySelector("section")   
    const body = document.querySelector('body')
    body.setAttribute('class','playAgain')
    section.remove();
    const button = document.createElement('button')
    button.setAttribute('class','btn-again')
    body.appendChild(button, body);
    button.textContent = 'Play Again'
    button.addEventListener('click', function(){
        location.reload();
    })
}
// Display the current score of the match 
function scoreCheck(){
    const scoreboard = document.querySelector('#scoreboard')
    scoreboard.textContent = `Human: ${humanScore} - Computer: ${computerScore}`
    finalResult()
}

fistButton.addEventListener('click', function(){
    game('Rock')
})
handButton.addEventListener('click', ()=>{
    game('Paper')
})
scissorButton.addEventListener('click', ()=>{
    game('Sciessor')
})
