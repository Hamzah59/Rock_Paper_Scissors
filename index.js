var arr = ["Rock", "Paper", "Scissors"];
var randomPlay = (arr[Math.floor(Math.random()*arr.length)]);
function computerPlay() {
    return randomPlay;  
}

var result;
function round(playerSelection, computerSelection){
playerSelection = playerSelection.toLowerCase();
    
if (playerSelection==="rock" && computerSelection==="Paper") 
{
result = "You Lose";
}
else if(playerSelection==="rock" && computerSelection==="Rock")
{
result = "It's a draw";
}
else if (playerSelection==="rock" && computerSelection==="Scissors")
{
result = "You Win!";
}
else if (playerSelection==="paper" && computerSelection==="Scissors") 
{
result = "You Lose";
}
else if(playerSelection==="paper" && computerSelection==="Paper")
{
result = "It's a draw";
}
else if (playerSelection==="paper" && computerSelection==="Rock")
{
result = "You Win!";
}
if (playerSelection==="scissors" && computerSelection==="Rock") 
{
result = "You Lose";
}
else if(playerSelection==="scissors" && computerSelection==="Scissors")
{
result = "It's a draw";
}
else if (playerSelection==="scissors" && computerSelection==="Paper")
{
result = "You Win!";
}

return result;
};


function game()
{
    let playerScore = 0;
    let computerScore = 0;
    for (let int = 0; int < 5; int++)
 {
     computerPlay();
    console.log(round(playerSelection = prompt("Choose Rock, Paper or Scissors") ,computerSelection = computerPlay()));
    console.log("You chose" + " " + playerSelection);
    console.log("Computer Chose" + " " + randomPlay); 

    if (result === "You Win!"){
        playerScore++;
    }
    else if (result === "You Lose"){
        computerScore++;
    }
    else {}
 }
 console.log("Player Score =" + " " + playerScore,'\n',"Computer Score =" + " " + computerScore); 
}

game();