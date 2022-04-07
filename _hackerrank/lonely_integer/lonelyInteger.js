const lonelyInteger = (a) => {
  const count = a.reduce((obj, int) => {
    obj[int] = obj[int] + 1 || 1;
    return obj;
  }, {});

  return Object.keys(count).find((key) => count[key] === 1);
};

lonelyInteger([1, 2, 3, 4, 3, 2, 1]);

// Solutions by others:
// Seems beautiful and short but it's O(n^2) performance
const lonelyInteger_On2 = (a) => {
  return a.find((n) => a.indexOf(n) === a.lastIndexOf(n));
};

lonelyInteger_On2([1, 2, 3, 4, 3, 2, 1]);

// Another solution with O(n) linear
const lonelyInteger_On = (a) => {
  const s = new Set();
  a.forEach((int) => (s.has(int) ? s.delete(int) : s.add(int)));
  return Array.from(s)[0];
};

lonelyInteger_On([1, 2, 3, 4, 3, 2, 1]);
