const BaseballCounter = require("../src/BaseballCounter");
const ExceptionHandler = require("../src/ExceptionHandler");

describe("BaseballCounter", () => {
  test("숫자 야구 결과 계산", () => {
    const inputs = ["123", "645", "789"];
    const answers = [
      [1, 2, 3],
      [4, 5, 6],
      [1, 2, 3],
    ];
    const results = ["3스트라이크", "3볼", "낫싱"];

    inputs.forEach((input, index) => {
      const result = BaseballCounter.calculateResult(input, answers[index]);
      expect(result).toBe(results[index]);
    });
  });
});

describe("ExceptionHandler", () => {
  test("예외 처리", () => {
    const inputs = ["1234", "123", "123a", "a123", "123456", "123456789"];
    const results = [
      "예외 발생",
      "예외 발생",
      "예외 발생",
      "예외 발생",
      "예외 발생",
    ];

    inputs.forEach((input, index) => {
      expect(() => {
        ExceptionHandler.checkInput(input);
      }).toThrow();
    });
  });
});
