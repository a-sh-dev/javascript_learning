// Progamiz

//! Multiple case switch program
let fruit = "apple";
switch(fruit) {
  case "apple":
  case "mangao":
  case "papaya":
    console.log(`${fruit} is a fruit.`);
    break;
  default:
    console.log(`{fruit} is not a fruit.`);
    break;
} 

// ! Another example from Ed
function canItFly(bird) {
  bird = bird.toLowerCase();
  switch (bird) {
      case "cockatiel":
      case "finch":
      case "dove":
      case "parrot":
          return true;
      default:
          return false;
  }
}