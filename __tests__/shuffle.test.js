const shuffle = require("../src/shuffle");


const testData = [5, 1, 3, 2, 4, 0];

describe("shuffle should...", () => {
  test("Items have been shuffled around", () => {
    expect(shuffle(testData)).not.toBe(testData); 
  });
  test("shuffle returns an array of the same length as the argument sent in", () => {
    expect(shuffle(testData)).toHaveLength(6);
  });

  
});
