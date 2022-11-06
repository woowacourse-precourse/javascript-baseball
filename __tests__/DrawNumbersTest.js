const App = require("../src/App");
const { MIN_NUMBER, MAX_NUMBER, NUMBER_LENGTH } = require("./constants/ConstantValues");

describe.only("숫자 뽑기 테스트", () => {
  test("숫자 개수가 3개인지 확인", () => {
    const app = new App();
    const threeRandomNumber = app.drawThreeRandomNumbers();

    expect(threeRandomNumber).toHaveLength(NUMBER_LENGTH);
  });

  test("숫자 범위가 1부터 9까지인지 확인", () => {
    const app = new App();
    const threeRandomNumber = app.drawThreeRandomNumbers();

    threeRandomNumber.split("").forEach((number) => {
      expect(Number(number)).toBeGreaterThanOrEqual(MIN_NUMBER);
      expect(Number(number)).toBeLessThanOrEqual(MAX_NUMBER);
    });
  });

  test("각 숫자가 중복되어 있는지 확인", () => {
    const app = new App();
    const threeRandomNumber = app.drawThreeRandomNumbers();
    const nonduplicatedNumber = [...new Set(threeRandomNumber.split(""))];

    expect(nonduplicatedNumber.length).toEqual(NUMBER_LENGTH);
  });
});
