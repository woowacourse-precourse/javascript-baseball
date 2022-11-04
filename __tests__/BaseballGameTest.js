const App = require("../src/App");

describe("숫자 야구 게임", () => {
  test("주어진 메시지 출력", () => {
    const message = "test message";
    const logSpy = jest.spyOn(console, "log");

    const app = new App();
    app.print(message);

    expect(logSpy).toHaveBeenCalledWith(message);
  });
});
