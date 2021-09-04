const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("A number must be provided");
  }
  return a + b;
};

module.exports = add;