const computerPlay = () => {
const arrChoices = ["Rock", "Paper", "Scissors"];
const randomPlay = Math.floor(Math.random()*arrChoices.length);
     return arrChoices[randomPlay]
}
let computerScore = 0;
let playerscore = 0;
const ScissorsButton = document.querySelector('#scissors');
const PaperButton = document.querySelector('#paper');
const RockButton = document.querySelector('#rock');
const outcomediv = document.querySelector('#outcomediv')
const playerScorespan = document.querySelector('#player-score')
const compScorespan = document.querySelector('#comp-score')
const allbtn = document.querySelectorAll('button')


function round(playerSelection, computerSelection){
//playerSelection = playerSelection.toLowerCase();
if (playerSelection==="rock" && computerSelection==="Paper") 
{
    const p = document.createElement('p')
p.innerHTML = "You Lose";
outcomediv.appendChild(p)
computerScore++
}
else if(playerSelection==="rock" && computerSelection==="Rock")
{
    const p = document.createElement('p')
    p.innerHTML = "It's a draw";
    outcomediv.appendChild(p)
}
else if (playerSelection==="rock" && computerSelection==="Scissors")
{
    const p = document.createElement('p')
    p.innerHTML = "You Win!";
    outcomediv.appendChild(p)
    playerscore++
}
else if (playerSelection==="paper" && computerSelection==="Scissors") 
{
    const p = document.createElement('p')
    p.innerHTML = "You Lose";
    outcomediv.appendChild(p)
    computerScore++
}
else if(playerSelection==="paper" && computerSelection==="Paper")
{
    const p = document.createElement('p')
    p.innerHTML = "It's a draw";
    outcomediv.appendChild(p)
}
else if (playerSelection==="paper" && computerSelection==="Rock")
{
    const p = document.createElement('p')
    p.innerHTML = "You Win!";
    outcomediv.appendChild(p)
    playerscore++
}
if (playerSelection==="scissors" && computerSelection==="Rock") 
{
    const p = document.createElement('p')
    p.innerHTML = "You Lose";
    outcomediv.appendChild(p)
    computerScore++
}
else if(playerSelection==="scissors" && computerSelection==="Scissors")
{
    const p = document.createElement('p')
    p.innerHTML = "It's a draw";
    outcomediv.appendChild(p)
}
else if (playerSelection==="scissors" && computerSelection==="Paper")
{
    const p = document.createElement('p')
    p.innerHTML = "You Win!";
    outcomediv.appendChild(p)
    playerscore++
}
};

RockButton.addEventListener('click',() => {
const computerSelection = computerPlay()
const playerSelection = ("rock")
round(playerSelection, computerSelection)
trackscore(playerscore,computerScore)
WinnerCheck(playerscore,computerScore)
})

PaperButton.addEventListener('click',() => {
    const computerSelection = computerPlay()
    const playerSelection = ("paper")
    round(playerSelection, computerSelection)
    trackscore(playerscore,computerScore)
    WinnerCheck(playerscore,computerScore)
    })

ScissorsButton.addEventListener('click',() => {
        const computerSelection = computerPlay()
        const playerSelection = ("scissors")
        round(playerSelection, computerSelection)
        trackscore(playerscore,computerScore)
        WinnerCheck(playerscore,computerScore)
        })

const trackscore = (playerscore,computerScore) => {
    playerScorespan.innerHTML = `Player Score = ${playerscore}`
    compScorespan.innerHTML = `Computer Score = ${computerScore}`
}
const WinnerCheck = (playerscore, computerScore) =>
{
if (playerscore === 5){
const h2 = document.createElement('h2')
h2.classList.add("player-score")
h2.innerText = `You beat computer by ${playerscore} to  ${computerScore}`
outcomediv.appendChild(h2)
}

    if (computerScore === 5){
    const h2 = document.createElement('h2')
    h2.classList.add("comp-score")
    h2.innerText = `Computer beat you by ${computerScore} to  ${playerscore}`
    outcomediv.appendChild(h2)
    }
}

 /* function game()
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
 */