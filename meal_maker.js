// ! Codecademy MEAL MAKER - Randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },

  // create getter methods
  get appetizers() { 
    return this._courses.appetizers; 
    },

  get mains() { 
    return this._courses.mains; 
    },

  get desserts() { 
    return this._courses.desserts; 
    },

  // create setter methods  
  set appetizers(appetizersData) {
    this._courses.appetizers = appetizersData
  },
  
  set mains(mainsData) {
    this._courses.mains = mainsData
  },

  set desserts(dessertsData) {
    this._courses.desserts = dessertsData
  },

  // Create an getter method for the courses property
  get course() {
    return _courses;
    // return {
    //   appetizers: this.appetizers,
    //   mains: this.mains,
    //   desserts: this.desserts,
    // }
  },

  // Create a method to add a new dish to the specified course on the menu - the method should take in three params: courseName, dishName and dishPrice
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };

    this._courses[courseName].push(dish)

  },

  // Function that allow us to get a random dish from a course on the menu, which will be necessary for generating a random meal  
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    // return a dish from 'dishes' by using 'randomIndex'
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  // Function which will automatically generate a three-course meal
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = Math.floor(appetizer.price + main.price + dessert.price)

    return `Your meal is ${toTitleCase(appetizer.name)}, ${toTitleCase(main.name)}, ${toTitleCase(dessert.name)} -- with the total price of $${totalPrice}.`;
 }
};

// Titlecase function
const toTitleCase = str => {
  return str.replace(
    /([^\W_]+[^\s-]*) */g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
};

// Create a menu by adding some appetizers, mains and desserts
menu.addDishToCourse('desserts', 'serambi solo', 2.50);
menu.addDishToCourse('desserts', 'avocado ice cream', 2.50);
menu.addDishToCourse('desserts', 'chocolate dango', 5.70);
menu.addDishToCourse('desserts', 'pandan sponge cake', 7.55);

menu.addDishToCourse('appetizers', 'nengmyon', 16.70);
menu.addDishToCourse('appetizers', 'wafu salad', 12.50);
menu.addDishToCourse('appetizers', 'beef wagyu tataki', 20.25);
menu.addDishToCourse('appetizers', 'mushroom soup', 9.80);

menu.addDishToCourse('mains', 'samgyoupsal spicy bbq', 26.90);
menu.addDishToCourse('mains', 'bakmi karet camat', 12.50);
menu.addDishToCourse('mains', 'wagyu steak grade A5', 57.90);
menu.addDishToCourse('mains', 'duck confitt lasagna', 19.95);

let meal = menu.generateRandomMeal();
console.log(meal);

