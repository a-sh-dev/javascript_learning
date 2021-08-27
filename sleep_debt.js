// ! Codecademy - SleepDebtCalculator

// Create a function getSleepHours to return any given night's number of hours of rest
// The function should accept a day as an argument and return the number of hours slept that night. E.g: If 8 hrs sleep on Monday, then getSleepHours("Monday") should return 8
const getSleepHours = day => {
  switch (day) {
    case "monday":
    case "saturday":
      return 4;
      break;
    case "tuesday":
      return 5;
      break;
    case "wednesday":
    case "thursday":
    case "friday":
      return 10;
      break;
    case "sunday":
      return 5;
      break;
  }
}

// Get the total sleep hours slept, get the ideal sleep hours preferred, calculate the sleep debt if any (concise form doesn't need brackets)
const getActualSleepHours = () => getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");

// get the ideal sleep hours preferred - and declare a variable named idealHours and set its value to the ideal hours per night. Then return the idealHours multiplied by 7 -> to get the total hours preferred per week
const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
}

// Calculate sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log(`You got the perfect amout of sleep! ${actualSleepHours} hours.`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You slept too much! ${actualSleepHours - idealSleepHours} extra hours.`)
  } else {
    console.log(`You should get more sleep! ${idealSleepHours - actualSleepHours} more hours ideally.`);
  }
}

// start program
calculateSleepDebt();


