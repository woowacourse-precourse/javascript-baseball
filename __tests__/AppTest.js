const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const game = require("../src/game/game");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("야구 게임 진행 관련 함수 테스트", () => {
  test('game.Start() : 게임 시작 문구 출력 함수', () => {
    const logSpy = getLogSpy();
    const output = "숫자 야구 게임을 시작합니다."

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(output);
  });
});
