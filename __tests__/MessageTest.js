const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("메세지 테스트", () => {
  test("시작 메세지 테스트", () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    expect(logSpy).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });

  test("종료 메세지 테스트", () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.gameEnd();
    expect(logSpy).toHaveBeenCalledWith(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
  });
});
