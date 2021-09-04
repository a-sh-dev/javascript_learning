const add = require('../source/add');

describe("Basic Add functionality Testing", () => {

  test("Adds 5 + 5 to equal 10", () => {
    expect(add(5, 5)).toBe(10);
  });

  test("Adds 2 + 2 to equal 4", () => {
    expect(add(2, 2)).toBe(4);
  });

  test("Throws and error when input is not a number", () => {
    expect(() => {
      add(2, "2")
    }).toThrow();
  });


})

