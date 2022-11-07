const App = require("../src/App");

describe("computerNumber() 테스트", () => {
  test("컴퓨터 숫자 조건에 맞는지", () => {
    const app = new App();
    const computerNumber = app.computerNumber();

    expect(() => app.checkNumber(computerNumber.join(""))).not.toThrow();
  });
});
