// Before ES6:
// const filterByTerm = require('../src/filterByTerm');
// ES6:
import filterByTerm from '../src/filterByTerm';

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {

    // Define a simple input -> an array of objects
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    // Define the expected result. Acc to the spec, the function under test should leave out the objects whose url property does not match the given search term -> we can expect for example an array with a single object, given "link" as the search term:
    
    const output = [{ id: 3, url: "https://www.link3.dev" }]; 

    // Write the actual test -> "expect" and "matcher"
    expect(filterByTerm(input, "link")).toEqual(output);
    // Test for uperrcase
    expect(filterByTerm(input, "LINK")).toEqual(output);
  });
});

