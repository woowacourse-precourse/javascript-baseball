const BaseballGame = require("../src/BaseballGame");
const MissionUtils = require("@woowacourse/mission-utils");

const baseballGame = new BaseballGame();

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const checkComputerRandomArray = (array) => {
  const checkSet = new Set(array);

  if ([...checkSet].length < 3) return false;

  return true;
};

describe("기능 테스트", () => {
  test("인삿말 테스트", () => {
    const logSpy = getLogSpy();

    baseballGame.greeting();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("숫자 야구 게임을 시작합니다."));
  });
});
