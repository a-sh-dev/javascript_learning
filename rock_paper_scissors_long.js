// Codecademy Rock-Paper-Scissors

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
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }
  
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
      } else {
        return "Congrats, you won!";
      }
  };
  
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won!";
      } else {
        return "Congrats, you won!";
      }
  };

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won!";
      } else {
        return "Congrats, you won!";
      }
  }

  if (userChoice === "bomb") {
    return "Boooom! You won!";
  }
};

// Create play game function
const playGame = () => {
  const userChoice = getUserChoice("scissors");
  const computerChoice = getComputerChoice();
  console.log(`You threw ${userChoice}, Computer threw ${computerChoice}.`);

  console.log(determineWinner(userChoice, computerChoice));
};

// Call the function
playGame();
