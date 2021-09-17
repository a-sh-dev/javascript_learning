// ! Classes (CodeCademy)
/*
- Classes are templates for objects
- JS calls a constructor method when we create a new instance of a class
- Inheritance is when we create a parent class with properties and methods that we can extend to child classes
- 'extends' keyword is used to create a subclass
- 'super' keyword calls the constructor() of a parent class
- Static methods are called on the class, but not on instances of the class 
*/

// Parent class
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}

// Subclass
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

// Subclass
class Doctor extends HospitalEmployee {
  constructor(name, insurance) {
    super(name);
    this._insurance = insurance;
  }
}


// Create a new nurse instance
const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

// Create a new doctor instance
const doctorStrange = new Doctor('Strange', true);
console.log(doctorStrange);