const App = require("../src/App");
const StrikeAndBall = require("../src/StrikeAndBall");

describe.only("스트라이크 볼 카운트 테스트", () => {
  test("스트라이크 볼 카운트 결과 가져오는 함수", () => {
    const answerNumber = "123";
    const inputs = [
      ["123", [3, 0]],
      ["135", [1, 1]],
      ["231", [0, 3]],
      ["345", [0, 1]],
      ["789", [0, 0]],
    ];

    inputs.forEach(([input, strikeAndBallCount]) => {
      const result = StrikeAndBall.getResult(answerNumber, input);
      expect(result).toEqual(strikeAndBallCount);
    });
  });
});
