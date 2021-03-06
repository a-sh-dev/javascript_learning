// ! From CodeCademy

class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  };

  get title() {
    return this._title;
  };

  get ratings() {
    return this._ratings;
  };

  get isCheckedOut() {
    return this._isCheckedOut;
  };

  // setters is for changing the value
  set isCheckedOut(status) {
    this._isCheckedOut = status;
  };

  // method that changes the value saved to the _isCheckedOut property
  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  getAverageRating() {
    let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
    return ratingsSum / this.ratings.length;
  }

  addRating(rating) {
    this.ratings.push(rating);
  }

  // ! Method to obtain the class's name
  confirmClass() {
    return `"${this.title}" is a ${this.constructor.name}.`
  }

  // method that can be extended
  print() {
    return `Title: ${this.title}`
  }
}

// Book - author (str), pages (num), title (str),isCheckedOut (bool = false), ratings (arr)
class Book extends Media {
  constructor(title, author, pages) {
    super (title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }

  // ! Method extended from parent class
  print() {
    return `Book ${super.print()} by ${this.author}`
  }
}

// Movie - director (str), runTime (num), title (str), isCheckedOut (bool = false), ratings (arr)
class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

// CD - artist (str), title (str), isCheckedOut (bool = false), ratings (arr), songs (arr)
class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = [];
  }
}

// Create Book instance
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything.confirmClass());

// Create Movie instance
const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
console.log(speed.confirmClass());

