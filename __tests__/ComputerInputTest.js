const App = require("../src/App.js");
const condition = require("../src/constants/condition.js");
const app = new App();

describe("컴퓨터 랜덤 숫자 생성 메서드 테스트", () => {
  test(`숫자의 길이는 ${condition.MAX_NUMBER_LENGTH}이여야 함`, () => {
    const computerInput = app.generateComputerInput();
    const numberLength = computerInput.length;

    expect(numberLength).toBe(condition.MAX_NUMBER_LENGTH);
  });

  test(`각 숫자는 중복되지 않아야 함`, () => {
    const computerInput = app.generateComputerInput();
    const duplicateCheckSet = new Set(computerInput);

    expect(computerInput.length).toBe(duplicateCheckSet.size);
  });

  test(`각 숫자는 ${condition.MIN_NUMBER_RANGE} ~ ${condition.MAX_NUMBER_RANGE} 범위 내에 수 여야 함`, () => {
    const computerInputArr = app.generateComputerInput().split("");
    const MIN = condition.MIN_NUMBER_RANGE;
    const MAX = condition.MAX_NUMBER_RANGE;

    computerInputArr.forEach((input) => {
      const number = parseInt(input, 10);
      expect(number).toBeGreaterThanOrEqual(MIN);
      expect(number).toBeLessThanOrEqual(MAX);
    });
  });
});
