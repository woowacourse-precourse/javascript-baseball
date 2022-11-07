const App = require("../src/App");
const { GAME_MESSAGES, RANGE_NUMBER, ERROR_MESSAGES } = require("../src/Constant");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("게임 메세지 테스트 ", () => {
  test("", () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(GAME_MESSAGES.START));
  });
});
