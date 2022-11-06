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

  test("스트라이크 볼 카운트 결과를 문자열로 바꿔주는 함수", () => {
    const inputs = [
      [3, 0, "3스트라이크"],
      [1, 1, "1볼 1스트라이크"],
      [0, 2, "2볼"],
      [1, 2, "2볼 1스트라이크"],
      [0, 0, "낫싱"],
    ];

    inputs.forEach(([strike, ball, resultString]) => {
      const result = StrikeAndBall.getString(strike, ball);
      expect(result).toEqual(resultString);
    });
  });
});
