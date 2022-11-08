const BaseballGame = require("../baseballGame.js");
const MissionUtils = require("@woowacourse/mission-utils");

describe("컴퓨터 숫자와 사용자 숫자 비교 결과", () => {
  let baseballGame;
  beforeEach(() => {
    baseballGame = new BaseballGame();
  });

  const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
  };

  test("스트라이크 개수가 맞는지 검사", () => {
    baseballGame.computerNumber = [1, 2, 3];
    const user = ["123", "124", "145", "456"];
    const strike = [3, 2, 1, 0];

    strike.forEach((strike, index) => {
      baseballGame.userInput = user[index];
      expect(baseballGame.countStrikeNumbers()).toBe(strike);
    });
  });

  test("볼 개수가 맞는지 검사", () => {
    baseballGame.computerNumber = [1, 2, 3];
    const user = ["312", "321", "134", "145"];
    const ball = [3, 2, 1, 0];

    ball.forEach((ball, index) => {
      baseballGame.userInput = user[index];
      expect(baseballGame.countBallNumbers()).toBe(ball);
    });
  });
});
