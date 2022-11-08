const App = require("../src/App");

const app = new App();

describe("기능 테스트", () => {
  test("예외처리 테스트 1", () => {
    const input = "11";
    expect(() => {
      app.answerChecker(input);
    }).toThrow();
  });

  test("예외처리 테스트 2", () => {
    const input = "1234";
    expect(() => {
      app.answerChecker(input);
    }).toThrow();
  });

  test("예외처리 테스트 3", () => {
    const input = 1;

    const result = app.isPlayContinue(input);
    expect(result).toBeTruthy();
  });

  test("예외처리 테스트 4", () => {
    const input = "s";
    expect(() => {
      app.answerChecker(input);
    }).toThrow();
  });

  test("예외처리 테스트", () => {});
});
