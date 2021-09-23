const checkAvailability = (itemName, distributorName) => {
  console.log(`Checking Availability of ${itemName} at ${distributorName}...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (restockSuccess()) {
        console.log(`${itemName} are in stock at ${distributorName}`)
        resolve(itemName);
      } else {
        reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
      }
    }, 1000);
  });
};

module.exports = {
  checkAvailability
};

// ! This is a function that returns true 80% of the time - We're using it to simulate a request to the distributor response being successfull
function restockSuccess() {
  return (Math.random() > 0.2);
}