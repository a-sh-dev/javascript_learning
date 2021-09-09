// ! From CodeCademy
/*
* Create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc. Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/ 

const team = {
  
  _players: [
    {
      firstName: 'Roger',
      lastName: 'Federrer',
      age: 40
    },
    {
      firstName: 'Novak',
      lastName: 'Djokovic',
      age: 34
    },
    {
      firstName: 'Rafael',
      lastName: 'Nadal',
      age: 36
    }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Barcelona',
      teamPoints: 62,
      opponentPoints: 33
    },
    {
      opponent: 'Maradonna Cup',
      teamPoints: 39,
      opponentPoints: 39
    }
  ],

  // Create getter methods for _players and _games keys. No setter methods needed as we don't want to change the values saved to these keys.
  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  // Function to add a new player to the team. This method should take in three parameters: firstName, lastName, and age -> it should create a player object to be added to the team's players array
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },

  // Add a method for recording new game results
  addGame(oppName, teamPts, oppPts) {
    const game = {
      opponent: oppName,
      teamPoints: teamPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }
};

// Add a new player:
team.addPlayer('Bobolita', 'McCornDoggo', 28);
team.addPlayer('Nyomi', 'Kim', 12);
team.addPlayer('Shang', 'Chi', 39);

console.log(team.players);

team.addGame('Titans', 100, 98);
team.addGame('The Pizza Scrumpers Cup', 150, 80);
team.addGame('The Cutest People Cup', 200, 55);