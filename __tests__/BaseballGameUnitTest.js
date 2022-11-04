const App = require("../src/App");

const removeDuplicatedNumber = (stringNumber) => [
  ...new Set([...stringNumber]),
];

const repeat = (callbackFn, trial = 100) => {
  for (let repeatCount = 0; repeatCount < trial; repeatCount += 1) {
    callbackFn();
  }
};

describe("숫자 야구 게임 단위 테스트", () => {
  test("generateRandomNumber 메서드로 서로 다른 3자리의 랜덤숫자를 반환", () => {
    const app = new App();
    expect(removeDuplicatedNumber("111").length).toEqual(1);
    expect(removeDuplicatedNumber("121").length).toEqual(2);
    repeat(() => {
      const randomNumber = app.generateRandomNumber();
      expect(removeDuplicatedNumber(randomNumber).length).toEqual(3);
    });
  });

  test("isValidNumber 메서드로 입력 받은 숫자가 서로 다른 3자리의 숫자인지 확인", () => {
    const app = new App();
    expect(app.isValidNumber("")).toBe(false);
    expect(app.isValidNumber(" ")).toBe(false);
    expect(app.isValidNumber("\n")).toBe(false);
    expect(app.isValidNumber("1")).toBe(false);
    expect(app.isValidNumber("12")).toBe(false);
    expect(app.isValidNumber("123")).toBe(true);
    expect(app.isValidNumber("111")).toBe(false);
    expect(app.isValidNumber("1234")).toBe(false);
    expect(app.isValidNumber("abc")).toBe(false);
  });
});
