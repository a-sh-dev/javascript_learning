// Codecademy: Race Day

// Generate random number between 0 to 1000
let raceNumber = Math.floor(Math.random() * 1000);

// Create a var that indicates whether a runner registered early or not - set to a boolean value, this will change later as we test different runner condition
let registeredEarly = false;

// Create a var for the runner's age and set it to a number
let age = Math.floor(Math.random() * 70);
// let age = 18;

// Control flow statement that checks whether the runner is an adult AND registered early. If true, add 1000 to the raceNumber
if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

// Create another control flow to check age and registration time to determine race time. For runners over 18 who registered early, log a statement that they will race at 9.30am. Include their raceNumber
if (age > 18 && registeredEarly) {
  console.log(`Runner #${raceNumber} (${age} years old), your time of race is 9.30am.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`Runner #${raceNumber}, (${age} years old), your time of race is 11.00am.`);
} else if (age < 18) {
  console.log(`Runner #${raceNumber}, (${age} years old), youth registrants run at 12.30pm.`);
} else {
  console.log("Please aproach the registration desk, thank you!");
}


