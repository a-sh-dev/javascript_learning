// ! Parent function
function StaffMember(firstName, lastName, location) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.location = location;
}

StaffMember.prototype.email = function() {
  return `${this.firstName.toLowerCase()}.${this.lastName.toLowerCase()}@coderacademy.edu.au`;
};

function Educator(firstName, lastName, location, cohort) {
  StaffMember.call(this, firstName, lastName, location)
  this.cohort = cohort;
}

Educator.prototype.classRoom = function () {
  return `${this.location.slice(0,3).toUpperCase()}-${this.cohort}`
}

Object.setPrototypeOf(Educator.prototype, StaffMember.prototype);

const alex = new Educator('Alex', 'Boulderstone', 'Melbourne', 'Flex-Track');
// alex.email = function() {
//   return 'alexisawesome@gmail.com'
// }

const ashleigh = new StaffMember('Ashleigh', 'Wilson', 'Brisbane');

console.log(alex.email());
console.log(akex.classRoom());
console.log(ash.email());
console.log(ash.classRoom());
