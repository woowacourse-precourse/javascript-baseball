const App = require("../src/App");

describe.only("숫자 뽑기 테스트", () => {
  test("숫자 개수가 3개인지 확인", () => {
    const app = new App();
    const threeRandomNumber = app.drawThreeRandomNumbers();

    expect(threeRandomNumber.length).toHaveLength(3);
  });

  test("숫자 범위가 1부터 9까지인지 확인", () => {
    const app = new App();
    const threeRandomNumber = app.drawThreeRandomNumbers();

    threeRandomNumber.split("").forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(9);
    });
  });

  test("각 숫자가 중복되어 있는지 확인", () => {
    const app = new App();
    const threeRandomNumber = app.drawThreeRandomNumbers();
    const nonduplicatedNumber = [...new Set(threeRandomNumber.split(""))];

    expect(nonduplicatedNumber.length).toEqual(3);
  });
});
