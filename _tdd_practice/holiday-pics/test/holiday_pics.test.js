const holidayPics = require('../source/holiday_pics');

describe("holidayPics function", () => {
  test("Is a function", () => {
    expect(typeof holidayPics).toBe('function');
  });

  test("Returns an array", () => {
    let pictures = holidayPics([1, 4, 6, 7], 1);
    expect(Array.isArray(pictures)).toBe(true);
  });
  
  test("Returns an array with some pictures if passed pictures", () => {
    let pictures = holidayPics([1, 4, 6, 7], 1);
    expect(pictures.length).toBeGreaterThan(0);
  });
  
  test("Returns an empty array if n is zero", () => {
    let pictures = holidayPics([1, 4, 6, 7], 0);
    expect(pictures.length).toBe(0);
  });

  test("Only allows two repeats if n is 2", () => {
    let pictures = holidayPics([1, 1, 1, 5, 5, 6, 9], 2)
    expect(pictures).toEqual([1, 1, 5, 5, 6, 9]);
  });
  
  test("Does not mutate original array", () => {
    let pictures = [1, 1, 1, 5, 5, 6, 9];
    holidayPics(pictures, 1);
    expect(pictures).toEqual([1, 1, 1, 5, 5, 6, 9]);
  });

  test("Does not change the order of pictures", () => {
    expect(holidayPics([1, 1, 2, 2, 1, 1, 3], 3)).toEqual([1, 1, 2, 2, 1, 3]);
  })
  
});