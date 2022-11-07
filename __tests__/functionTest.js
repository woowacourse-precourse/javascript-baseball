const App = require("../src/App");

describe("user number 유효성 검사", () => {
  test("user가 입력한 수의 길이가 3이 아니면 오류", () => {
    const app = new App();
    const USER_STRING = "1234";

    expect(() => app.validateUserNumbers(USER_STRING)).toThrow();
  });

  test("user가 입력한 수에 0이 들어있으면 오류", () => {
    const app = new App();
    const USER_STRING = "104";

    expect(() => app.validateUserNumbers(USER_STRING)).toThrow();
  });
});
