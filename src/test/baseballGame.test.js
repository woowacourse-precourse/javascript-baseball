const { countStrikeNumbers, countBallNumbers } = require("../baseballGame.js");

describe("컴퓨터 숫자와 사용자 숫자 비교 결과", () => {
  test("스트라이크 개수가 맞는지 검사", () => {
    const computerNumber = [1, 2, 3];
    const userInput = ["123", "124", "145", "456"];
    const strikeNumber = [3, 2, 1, 0];

    strikeNumber.forEach((strikeNumber, index) => {
      expect(countStrikeNumbers(computerNumber, userInput[index]))
        .toBe(strikeNumber);
    });
  });

  test("볼 개수가 맞는지 검사", () => {
    const computerNumber = [1, 2, 3];
    const userInput = ["312", "321", "134", "145"];
    const ballNumber = [3, 2, 1, 0];

    ballNumber.forEach((ballNumber, index) => {
      expect(countBallNumbers(computerNumber, userInput[index]))
        .toBe(ballNumber);
    });
  });
});
