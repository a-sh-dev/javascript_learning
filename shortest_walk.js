function shortestWalk(walk) {
  const opposite = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    WEST: "EAST",
    EAST: "WEST"
  };

  walk.forEach((direction, index) => {
    const oppositeIndex = walk.indexOf(opposite[direction]);
    // If value not found, -1 is returned
    if (oppositeIndex > 0) {
      delete walk[index];
      delete walk[oppositeIndex];
    }
  });
  // Filter out any undefined / falsey values
  // return walk.filter((direction) => !!direction);
  return walk.filter(Boolean);
}

console.log(
  shortestWalk(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
// should return ["WEST"]
console.log(shortestWalk(["NORTH", "SOUTH", "EAST", "WEST"]));
// should return []

// ! Sam's solution
function shortestWalkSam(walk) {
  const shortestPath = [];
  let oppositeDirection = {
    NORTH: "SOUTH",
    WEST: "EAST",
    SOUTH: "NORTH",
    EAST: "WEST"
  };
  walk.forEach((dir) => {
    if (shortestPath.length !== 0) {
      let lastDirection = shortestPath.pop();
      if (lastDirection !== oppositeDirection[dir]) {
        shortestPath.push(lastDirection);
        shortestPath.push(dir);
      }
    } else {
      shortestPath.push(dir);
    }
  });
  return shortestPath;
}

console.log("--- SAM'S SOLUTION ---");
console.log(
  shortestWalkSam(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
// should return ["WEST"]
console.log(shortestWalkSam(["NORTH", "SOUTH", "EAST", "WEST"]));
// should return []

// ! Nam's Solution
// Essentially counts each direction, then subtracts North - South and East - West,
// with the sign for the final direction (-1 / 0 / 1), without having to consider
// the magnitude/count. Short circuit logic there to account for if any
// specific direction isn't passed in.
function shortestWalkNam(walk) {
  const directions = walk.reduce(
    (count, direction) => (
      (count[direction] = (count[direction] || 0) + 1), count
    ),
    {}
  );
  const latitude = { "-1": "SOUTH", 0: null, 1: "NORTH" };
  const longitude = { "-1": "WEST", 0: null, 1: "EAST" };
  const xDirection = Math.sign(
    (directions["EAST"] || 0) - (directions["WEST"] || 0)
  ); // returns -1, 0, or 1
  const yDirection = Math.sign(
    (directions["NORTH"] || 0) - (directions["SOUTH"] || 0)
  ); // returns -1, 0, or 1
  return [latitude[yDirection], longitude[xDirection]].filter(Boolean);
}

console.log("--- NAM'S SOLUTION ---");
console.log(
  shortestWalkNam(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
// should return ["WEST"]
console.log(shortestWalkNam(["NORTH", "SOUTH", "EAST", "WEST"]));
// should return []
