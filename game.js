/* this app is going to call the computerPlay function that would return the computer choice rondomly
    and then give it to the playRound function that takes also playerSelector from the prompt this 
    function figures out the result based on the choices taken and than assign it to the result variable
    so it could be consoled out in the console inside of the game function. */


    const choices = ['rock', 'paper', 'scissors'];
    const selections = document.querySelector('.selections');
    const round = document.querySelector('.round');
    // round.style.color = 'white';
    const showedResults = document.querySelector('.results');
    var result = 0;
    var playerScore = 0;
    var computerScore = 0;
    var roundNum = 0;
    const results = ["You win", "You lose", "It\'s a draw"];
    var playerSelector = 0;
    var computerSelector = 0;
    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");

    function computerPlay(){
        const choice = Math.round(Math.random()*(choices.length-1));
        return choices[choice];
    }
    
    
    function playRound(playerSelector){

        computerSelector = computerPlay();
        
        if(computerSelector == playerSelector){
            result = results[2]
        }else if(computerSelector === "rock" && playerSelector === "scissors"){
            computerScore++;
            result = results[1]
        }else if(computerSelector === "scissors" && playerSelector === "rock"){
            playerScore++;
            result = results[0]
        }else if(computerSelector === "scissors" && playerSelector === "paper"){
            computerScore++;
            result = results[1]
        }else if(computerSelector === "paper" && playerSelector === "scissors"){
            playerScore++;
            result = results[0]
        }else if(computerSelector === "paper" && playerSelector === "rock"){
            computerScore++;
            result = results[1]
        }else if(computerSelector === "rock" && playerSelector === "paper"){ 
            playerScore++;
            result = results[0]
        }
        showResults(playerSelector);
    }
    
    function showResults(playerSelector){
        roundNum++; 
        // console.log(`Round ${roundNum}`);
        round.innerHTML = `Round ${roundNum}`;
        selections.innerHTML = `computer choice: ${computerSelector} | Player choice: ${playerSelector}`;
        showedResults.innerHTML = `${result}. Your score is: ${playerScore}, and the computer score is ${computerScore}`;
        if(computerScore == 5){
            roundNum = 0;
            alert("You lost")
            console.clear();
            playerScore = 0;
            computerScore = 0;
        }else if (playerScore == 5){
            roundNum = 0;
            alert("You win!")
            console.clear();
            computerScore = 0;
            playerScore = 0;
        }

    }
    
    function game(){
            rock.addEventListener('click', () => {
                playRound("rock");
            });
            paper.addEventListener('click', () => {
                playRound("paper")
            });
            scissors.addEventListener('click', () => {
                playRound("scissors")
            });
    }

    game();

