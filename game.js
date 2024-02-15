/* Game Rules: 
    rock beats scissors
    paper beats rock
    scissors beat paper


1. Create function called playRound that takes in players choice and the computer choise (function should be case in-sensitive)
2. Create a function called getComputerChoice that returns rock, paper, or scissors at random
    create an array that holds the choices for pc
    randomize the array
    return result
    i. Compare user's choice against computer choice with If else-if 
        if user choses rock & computer choses scissors -> user wins
        if user choses paper & computer choses rock -> user wins
        if user choses scissors & comuter choses -> user wins
        otherwise computer winds
    ii. return result
*/

const getComputerChoice = () => {
  const gameChoices = ["rock", "paper", "scissors"];
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
};

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();

const playRound = (playerSelection, computerSelection) => {
  if (typeof playerSelection !== "string") {
    return 'Invalid entry, please enter "rock", "paper", or "scissors"!';
  }

  const lowerCasedPlayerChoice = playerSelection.toLowerCase();

  if (
    lowerCasedPlayerChoice !== "rock" &&
    lowerCasedPlayerChoice !== "paper" &&
    lowerCasedPlayerChoice !== "scissors"
  ) {
    return "Invalid entry, try again!";
  }
  if (lowerCasedPlayerChoice === computerSelection) {
    return "Game tied!";
  } else if (
    lowerCasedPlayerChoice === "rock" &&
    computerSelection === "scissors"
  ) {
    return `You win...${lowerCasedPlayerChoice} beats ${computerSelection}`;
  } else if (
    lowerCasedPlayerChoice === "paper" &&
    computerSelection === "rock"
  ) {
    return `You win...${lowerCasedPlayerChoice} beats ${computerSelection}`;
  } else if (
    lowerCasedPlayerChoice === "scissors" &&
    computerSelection === "paper"
  ) {
    return `You win...${lowerCasedPlayerChoice} beats ${computerSelection}`;
  } else {
    return `You lose...${computerSelection} beats ${lowerCasedPlayerChoice}`;
  }
};
let userTyped = prompt("Rock, Paper, Scissors...Go!");

const playGame = () => {
  let gameScore = [];
  let i = 0;

  while (i < 5) {
    const computerSelection = getComputerChoice();
    const playerSelection = userTyped;
    let result = playRound(playerSelection, computerSelection);

    gameScore.push(result);
    i++;
  }
  return gameScore;
};

console.log(playGame());
