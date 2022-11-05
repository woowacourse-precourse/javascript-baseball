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
  test("두 인자가 같은지 확인", () => {
    const char1 = "1",
      char2 = "1",
      num1 = 1,
      num2 = 2;

    const app = new App();
    const result1 = app.isEqual(char1, char2),
      result2 = app.isEqual(char1, num1),
      result3 = app.isEqual(num1, num2);

    expect(result1).toBe(true);
    expect(result2).toBe(false);
    expect(result3).toBe(false);
  });
});
