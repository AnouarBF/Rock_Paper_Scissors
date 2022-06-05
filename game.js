/* this app is going to call the computerPlay function that would return the computer choice rondomly
    and then give it to the playRound function that takes also playerSelector from the prompt this 
    function figures out the result based on the choices taken and than assign it to the result variable
    so it could be consoled out in the console inside of the game function. */



    function computerPlay(){
        const choices = ['rock', 'paper', 'scissors'];
        const choice = Math.round(Math.random()*(choices.length-1));
        return choices[choice];
    }
    
    // var playerSelector = prompt("Your choice").toLowerCase();
    // var computerSelector = computerPlay();
    var result = 0;
    var playerScore = 0;
    var computerScore = 0;
    var roundNum = 1;
    const results = ["You win", "You lose", "It\'s a draw"];
    
    
    function playRound(){
        var playerSelector = prompt("Your choice").toLowerCase();
        var computerSelector = computerPlay();
        console.log("computer choice: ",computerSelector, "| Player choice: ",playerSelector);
    
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
    
    }
    
    function game(){
    
        while(roundNum <= 5){
            // computerPlay();
            console.log(`Round ${roundNum}`)
                playRound();
                console.log(result, playerScore, computerScore);
            roundNum++;
        }
        if(playerScore > computerScore){
            console.log('You did it! congratulations!!!')
        }else{
            console.log("Don't give! up you can do it!!")
        }
        
    }
    game(); 