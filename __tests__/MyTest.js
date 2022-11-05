const Computer = require("../src/Computer");
const User = require("../src/User")

describe("Computer", () => {
  test("case1", () => {
    const computer = new Computer;
    
    const computerTest = computer.getNumbers(); 
    expect(computerTest.length).toEqual(3);
  });
});

describe("User", () => {
  test("case1", () => {
    const user = new User;
    
    const computerTest = user.getNumbers(); 
    expect(computerTest.length).toEqual(3);
  });
});