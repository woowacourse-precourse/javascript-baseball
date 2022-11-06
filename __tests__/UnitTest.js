const MissionUtils = require("@woowacourse/mission-utils");
const Game = require("../src/Game");

describe("Game 메서드 테스트", () => {
  test("랜덤 숫자 출력 테스트", () => {
    const game = new Game();
    const result = game.setRandomNumber();

    expect(result).toHaveLength(3);
  });
});
