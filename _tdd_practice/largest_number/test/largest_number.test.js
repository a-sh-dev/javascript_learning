const { largestNumber } = require('../source/largest_number');

describe("largestNumber function", () => {
  it("Returns null when passed an empty array", () => {
    expect(largestNumber([])).toBe(null);
  });

  it("Should return the largest number, when passed negative numbers", () => {
    expect(largestNumber([-10, -5, -2])).toBe(-2);
    expect(largestNumber([10, 4, 0, -3, -10, -100])).toBe(10);
  });

  it("Should return the largest, number when passed all positives", () => {
    expect(largestNumber([10, 20, 40])).toBe(40);
  });

  it("Should handle repeated numbers", () => {
    expect(largestNumber([5, 10, 10, 10])).toBe(10);
    expect(largestNumber([5, 10, 10, 10, 25])).toBe(25);
  });

  it("Should not mutate the array passed into it", () => {
    let numbers = [1, 3, 5, 7, 13];
    largestNumber(numbers);
    expect(numbers).toEqual([1, 3, 5, 7, 13]);
  });
})