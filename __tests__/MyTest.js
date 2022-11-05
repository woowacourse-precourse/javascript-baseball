const Computer = require("../src/Computer");

describe("Computer", () => {
  test("case1", () => {
    const computer = new Computer;
    
    computer.setNumbers(3);
    const computerTest = computer.getNumbers(); 
    expect(computerTest.length).toEqual(3);
  });
});