const { cookBeans, steamBroccoli, cookRice, bakeChicken } = require('./library.js');

const serveDinner = async () => {
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);

  let foodString = '';
  foodArray.forEach((food, index) => {
    if (index === foodArray.length - 1) {
      foodString += `and ${food}`;
    } else {
      foodString += `${food}, `
    };
  });
  console.log(`Dinner is served. We're having ${foodString}.`);
};

serveDinner();

