const { checkAvailability } = require('./pa_library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item is available. Placing order now...`);
};

const onReject = (rejectionReason) => {
  console.log(rejectionReason);
};

// ! Promise.all
const checkSunglasses = checkAvailability('sunglasses', 'DAISO');
const checkPants = checkAvailability('pants', 'UNIQLO');
const checkBags = checkAvailability('bags', 'Louis Vuitton KW');

const promiseArray = [checkSunglasses, checkPants, checkBags];

Promise.all(promiseArray)
.then(onFulfill)
.catch(onReject)
