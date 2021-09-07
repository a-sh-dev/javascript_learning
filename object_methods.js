let homerSimpson = {
  firstName: 'Homer',
  lastName: 'Simpson',
  location: 'Springfield',
  children: [
    'Bart',
    'Lisa',
    'Maggie'
  ],
  catchPhrase: 'Doh!',
  // older stype:
  speaksOld: function() {
    console.log(this.catchPhrase);
  }
  // shorthand -> modern syntax:
  speaks() { console.log(this.catchPhrase) }
  
  // inside an object (like this one) don't use arrow function:
  // speak: () => {
  // console.log(this.catchPhrase)
  // } // resulting: undefined
}

homerSimpson.speaks(); // Doh!

