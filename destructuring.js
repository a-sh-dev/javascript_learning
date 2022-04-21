// ! Source: https://apurvasawant11.hashnode.dev/destructuring-in-javascript-part-i

// * Desctructuring allows us to extract values from arrays or properties from objects, and elegantly tie them to variables

let userInfo = {
  userID: 312,
  userName: "Theophilus",
  email: "theo.bb@test.com",
  address: {
    city: "Tokyo",
    country: "Japan"
  }
};

//! NORMAL WAY to obtain values of the above object will be:

// let userID = userInfo.userID;
// let name = userInfo.name;
// let city = userInfo.address.city;
// let country = userInfo.address.country;

//! DESTRUCTURED WAY
const { userID, userName } = userInfo;

console.log(userID); // 312
console.log(userName); // Theophilus

//! Renaming the variable
const { userID, userName: fullName, email: userEmail } = userInfo;

// ! Adding default value as well as alias
const { userName, jobTitle: jobRole = "Mr Perfect" } = userInfo;

console.log(jobTitle); // Mr Perfect

// ! Accessing nested objects
const { address : { country } } = userInfo;

// * Basic Syntax:
const { property1 : { property2 : { ... } } } = object;

// ! REST operator -> can be used when you want to pack the rest of the properties into another object
const { email, ...userDetails } = userInfo;

console.log(email, userDetails);

// ! Passing object to a function
// * Traditional way:
function getInfo(user) {
  console.log(`Name: ${user.userName}, Email: ${user.email}`);
};

getInfo(userInfo);

// * Using Object Destructuring:
function getInfoDesc( { name, email } ) {
  console.log(`Name: ${name}, Email: ${email}`);
};

getInfoDesc(userInfo);