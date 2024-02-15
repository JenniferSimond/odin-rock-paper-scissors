/* Game Rules: 
    rock beats scissors
    paper beats rock
    scissors beat paper


1. Create a function called getComputerChoice that returns rock, paper, or scissors at random
    create an array that holds the choices for pc
    randomize the array
    return result
2. Create function called playRound that takes in players choice and the computer choise (function should be case in-sensitive)

    B. Compare user's choice against computer choice with If else-if 
        if user choses rock & computer choses scissors -> user wins
        if user choses paper & computer choses rock -> user wins
        if user choses scissors & comuter choses -> user wins
        otherwise computer winds
    C. return result
*/

const getComputerChoice = () => {
  const array = ["rock", "paper", "scissors"];
  const shuffledChoices = array.sort(() => 0.5 - Math.random());
  return shuffledChoices[0];
};

let playerSelection = "paper";
const computerSelection = getComputerChoice();

const playRound = (playerSelection, computerSelection) => {
  const lowerCasePlayerSelection = playerSelection.toLowerCase();
  if (lowerCasePlayerSelection === computerSelection) {
    return `Game tied...`;
  } else if (
    lowerCasePlayerSelection == "rock" &&
    computerSelection == "scissors"
  ) {
    return `You win...${lowerCasePlayerSelection} beats ${computerSelection}!`;
  } else if (
    lowerCasePlayerSelection == "paper" &&
    computerSelection == "rock"
  ) {
    return `You win...${lowerCasePlayerSelection} beats ${computerSelection}!`;
  } else if (
    lowerCasePlayerSelection == "scissors" &&
    computerSelection == "paper"
  ) {
    return `You win...${lowerCasePlayerSelection} beats ${computerSelection}!`;
  } else {
    return `You lose...${computerSelection} beats ${lowerCasePlayerSelection}!`;
  }
};

let playerTyped = prompt(
  "Rock, Paper, Scissors...Go",
  "type rock, paper, or scissors"
);

const playGame = () => {
  const playerSelection = playerTyped;
  let gameScore = [];
  let i = 0;

  while (i < 5) {
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    gameScore.push(result);
    i++;
  }
  return gameScore;
};

console.log(playGame());

/*p
write function that loops calls function five times
keep track of how many rounds with counter
console log score after each round

*/
