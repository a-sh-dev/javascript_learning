// ! JSON is a string yet formatted that looks like JS objects

const group = require('./fx1-melb');

let rapperString = "[{\"name\": \"Kayne West\", \"nickname\": \"Ye\", \"dateOfBirth\": \"1977-06-08\"}, {\"name\": \"Aubrey Grham\", \"nickname\": \"Drake\", \"dateOfBirth\": \"1986-10-24\"}]";

let rappers = JSON.parse(rapperString);
console.log(rappers[0].name); // Kanye West

let alex = {
  name: 'Alex',
  age: 33,
  location: 'Melbourne',
  job: 'Course Coordinator',
  faveFood: ['Pizza', 'Curry', 'Nachos']
}

let alexString = JSON.stringify(alex);
console.log(alexString);

// ! Using external json file:
// move any 'require at the top'
// const group = require('./fx1-melb');
console.log(group);

// * Manipulate JSON file
// add a new educator
group.educators.push({educatorName: 'Iryna', location: 'Melbourne'});
console.log(group);

// fs -> file system
fs.writeFile('./fx1-melb.json', JSON.stringify(group), (err) => {
  if (err) {
    console.log('Oops, couldn\'t write file');
  } else {
    console.log('file updated');
  }
});

