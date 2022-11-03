const Computer = require("../src/Computer");
const { NUMBERS_RULES } = require("../src/static/constants");

describe("Computer", () => {
  test("create random numbers not duplicated", () => {
    const numbers = Array.from(
      {length: NUMBERS_RULES.maxOfRange}, 
      (_, index) => (index + NUMBERS_RULES.minOfRange)
    );
    const computer = new Computer();
    const computerNumbers = computer.setRandomNumbers().getNumbers();
    const set = new Set(computerNumbers);
    
    expect(set).toHaveProperty('size', NUMBERS_RULES.digit);
    expect(numbers).toEqual(expect.arrayContaining(computerNumbers));
  });
});
