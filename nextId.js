// ? Implement a function that returns the next available id in an array of objects. The ids are numerical and ascending - that is, each new entry to the array of objects has a higher id than any existing objects. E.g. nextId(data) // should return 11 -- If data is empty, nextId(data) should return 1

function nextId(data) {
  let dataLength = data.length;
  if (dataLength < 1) return 1;

  let sorted = data.sort((a, b) => {
    return a.id - b.id;
  });
  // let lastItem = sorted[dataLength - 1].id
  let lastItem = sorted.at(-1).id;
  return lastItem + 1;
}

function nextIdShort(data) {
  return data.length === 0
    ? 1
    : data
        .sort((a, b) => {
          return a.id - b.id;
        })
        .at(-1).id + 1;
}

function nextIdRed(data) {
  if (!data) return "No data found";

  const highestId = data.reduce((highest, object) => {
    if (object.id > highest) {
      highest = object.id;
    }
    return highest;
  }, 0);
  return highestId + 1;
}

function nextIdAlex(data) {
  if (data.length === 0) return 1;
  const maxId = Math.max(...data.map((eachData) => eachData.id));
  return maxId + 1;
}

let data = [
  {
    id: 1,
    label: "Rose"
  },
  {
    id: 13,
    label: "Tiger"
  },
  {
    id: 10,
    label: "Tree"
  }
];

// let data = []

console.log(nextId(data));
console.log(nextIdShort(data));
console.log(nextIdRed(data));
console.log(nextIdAlex(data));
