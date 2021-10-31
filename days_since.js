// ! Counting the number of days between two dates

const starting = "03/22/2021";
const ending = "10/31/2021";

const numOfDays = (start, end) => {
  const begin = new Date(start);
  const ending = new Date(end);

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculate the time difference between the two dates
  const diffInTime = ending.getTime() - begin.getTime();

  // Calculate the no of days between the two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
};

console.log(`It has been ${numOfDays(starting, ending)} days`);
