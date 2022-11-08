const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const generateRandomNumberArray = require("../src/utils/game/generateRandomNumber");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임 시나리오", () => {
  test("게임 시작 시 게임시작 문구 출력", () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    expect(logSpy).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });
});
