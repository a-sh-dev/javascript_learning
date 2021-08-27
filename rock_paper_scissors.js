// Codecademy Rock-Paper-Scissors -> REFRACTORED

// User should be able to choose 'rock', 'paper', 'scissors' when the game starts
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
    return userInput;
  } else {
    console.log("Invalid entry. Please type 'rock', 'paper', or 'scissors' only.");
  }
};

// Make the computer to make a choice by generating random numbers

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
  case 0:
    return "rock";
    // break;
  case 1:
    return "paper"
    // break;
  case 2:
    return "scissors"
    // break;
  }
};

// Determine a Winner by checking both userChoice and ComputerChoice
const determineWinner = (userChoice, computerChoice) => {
  
  const msgWon = "Congrats, you won!" 
  const msgLost = "Sorry, you lost..." 

  if (userChoice === computerChoice) {
    return "The game is a tie!";
  } 
  
  if (userChoice === "rock") {
    return computerChoice === "paper" ? msgLost : msgWon;
  };

  if (userChoice === "paper") {
    return computerChoice === "scissors" ? msgLost : msgWon;
  };
  
  if (userChoice === "scissors") {
    return computerChoice === "rock" ? msgLost : msgWon;
  };

  if (userChoice === "bomb") {
    return "Boooom! Congrats, you won!";
  }
};

// Create play game function
const playGame = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  
  console.log(`You threw ${userChoice.toUpperCase()}, Computer threw ${computerChoice.toUpperCase()}.`);

  console.log(determineWinner(userChoice, computerChoice));
};

// Call the function
playGame();
