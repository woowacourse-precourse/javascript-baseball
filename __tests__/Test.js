const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const getLogSpyRandom = () => {
  const logSpyRandom = jest.spyOn(MissionUtils.Random, "pickNumberInRange");
  logSpyRandom.mockClear();
  return logSpyRandom;
};

describe("숫자 야구 게임", () => {
  test("1. 게임 시작 출력문 테스트", () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("숫자 야구 게임을 시작합니다.")
    );
  });
  test("2. 컴퓨터 랜덤 번호 뽑기 테스트", () => {
    const logSpyRandom = getLogSpyRandom();

    const app = new App();
    app.play();

    expect(logSpyRandom).toHaveBeenCalled();
  });
});
