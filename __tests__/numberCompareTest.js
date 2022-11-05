const App = require("../src/App.js");

describe("숫자 비교 결과 출력 기능 테스트", () => {
  test(`getStrikeBallCount 메서드를 testInput으로 실행하면 result를 return해야함`, () => {
    const app = new App();
    const testInput = [
      ["123", "123"],
      ["123", "456"],
      ["123", "312"],
      ["123", "132"],
    ];
    const result = [
      [3, 0],
      [0, 0],
      [0, 3],
      [1, 2],
    ];

    testInput.forEach(([computerInput, userInput], idx) => {
      const methodResult = app.getStrikeBallCount(computerInput, userInput);
      expect(methodResult).toEqual(result[idx]);
    });
  });

  test(`getGameResultMessage 메서드를 testInput으로 실행하면 result를 return해야함`, () => {
    const app = new App();
    const testInput = [
      [3, 0],
      [0, 0],
      [0, 3],
      [1, 2],
    ];
    const result = ["3스트라이크", "낫싱", "3볼", "2볼 1스트라이크"];

    testInput.forEach(([strikeCount, ballCount], idx) => {
      const methodResult = app.getGameResultMessage(strikeCount, ballCount);
      expect(methodResult).toBe(result[idx]);
    });
  });
});
