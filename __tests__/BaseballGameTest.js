const App = require("../src/App");

describe("숫자 야구 게임", () => {
  test("주어진 메시지 출력", () => {
    const message = "test message";
    const logSpy = jest.spyOn(console, "log");

    const app = new App();
    app.print(message);

    expect(logSpy).toHaveBeenCalledWith(message);
  });
  test("서로 다른 세 자리 수를 랜덤으로 생성", () => {
    const DIGITS = 3;
    const set = new Set();

    const app = new App();
    const randomNumber = app.generateRandomNumber(DIGITS);

    randomNumber.forEach((num) => {
      expect(num.toString()).toMatch(/[1-9]/);
      set.add(num);
    });
    expect(set.size).toBe(DIGITS);
  });
});
