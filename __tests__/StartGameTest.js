const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("게임 시작 문구 테스트", () => {
  afterEach(() => {
    MissionUtils.Console.close();
  });

  test("게임 시작 문구 출력 확인", () => {
    const logSpy = getLogSpy();
    const app = new App();

    expect(logSpy).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });
});
