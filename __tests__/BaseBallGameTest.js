const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("구현 기능 목록 Test", () => {
  const app = new App();

  test("메시지 출력", () => {
    const logSpy = getLogSpy();

    app.printGameMsg("안녕하세요.");
    expect(logSpy).toHaveBeenCalledWith("안녕하세요.");
  });
});
