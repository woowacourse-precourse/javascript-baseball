const App = require("../src/App");

describe("checkNumber() 테스트", () => {
  test("예외-길이가 3이하 일때", () => {
    const userNumber = ["1"];
    const app = new App();

    expect(() => app.checkNumber(userNumber)).toThrow();
  });

  test("예외-숫자가 아닌게 들어올때", () => {
    const userNumber = ["1#2"];
    const app = new App();
    expect(() => app.checkNumber(userNumber)).toThrow();
  });
  test("예외-1-9사이가 아닐때", () => {
    const userNumber = ["120"];
    const app = new App();
    expect(() => app.checkNumber(userNumber)).toThrow();
  });
  test("예외-서로다른 숫자1", () => {
    const userNumber = ["113"];
    const app = new App();
    expect(() => app.checkNumber(userNumber)).toThrow();
  });
  test("예외-서로다른 숫자2", () => {
    const userNumber = ["121"];
    const app = new App();
    expect(() => app.checkNumber(userNumber)).toThrow();
  });
  test("예외-서로다른 숫자3", () => {
    const userNumber = ["122"];
    const app = new App();
    expect(() => app.checkNumber(userNumber)).toThrow();
  });
});
