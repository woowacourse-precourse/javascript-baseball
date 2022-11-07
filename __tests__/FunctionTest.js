const App = require("../src/App");

describe("서로 다른 임의의 3자리 수 생성 테스트", () => {
  const app = new App();
  app.generateComputerDigits();

  test("배열의 길이가 3이다.", () => {
    expect(app.computerDigits).toHaveLength(3);
  });

  test("배열의 각 요소는 1에서 9까지의 수로 이루어져 있다.", () => {
    app.computerDigits.forEach((digit) => {
      expect(digit).toBeGreaterThanOrEqual(1);
      expect(digit).toBeLessThanOrEqual(9);
    });
  });

  test("배열의 각 요소는 서로 다르다.", () => {
    expect(new Set(app.computerDigits).size).toEqual(app.computerDigits.length);
  });

  App.finishGame();
});
