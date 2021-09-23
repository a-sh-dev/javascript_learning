class StaffMember {
  constructor(firstName, lastName, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
  }

  email() {
    return `${this.firstName.toLowerCase()}.${this.lastName.toLowerCase()}@coderacademy.edu.au`
  }
}

class Educator extends StaffMember {
  constructor(firstName, lastName, location, cohort) {
    super(firstName, lastName, location)
    this.cohort = cohort;
  }

  classRoom() {
    return `${this.location.slice(0,3).toUpperCase()}-${this.cohort}`
  }
}

const alex = new Educator('Alex', 'Boulderstone', 'Melbourne', 'Flex-Trck');
console.log(alex.email());
console.log(alex.classRoom());