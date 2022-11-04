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
});
