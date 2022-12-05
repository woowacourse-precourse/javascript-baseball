const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("구현 기능 목록 테스트", () => {
  test("예외처리", () => {
    const app = new App();
    expect(() => app.validCheck([1, 2, 3, 4])).toThrow(
      "잘못된 값을 입력하셨습니다. 게임을 종료합니다."
    );
  });
  test("예외처리", () => {
    const app = new App();
    expect(() => app.validCheck([1, 1, 3])).toThrow(
      "잘못된 값을 입력하셨습니다. 게임을 종료합니다."
    );
  });

  test("모두 같은자리 같은숫자일 때", () => {
    const app = new App();
    expect(app.ballStrikeCounter([1, 2, 3], [1, 2, 3])).toEqual([0, 3]);
  });
  test("모두 다른자리 같은숫자일 때", () => {
    const app = new App();
    expect(app.ballStrikeCounter([1, 2, 3], [3, 1, 2])).toEqual([3, 0]);
  });
  test("일치하는 숫자가 하나도 없을 때", () => {
    const app = new App();
    expect(app.ballStrikeCounter([1, 2, 3], [4, 5, 6])).toEqual([0, 0]);
  });
  test("1스트라이크 1볼인 경우", () => {
    const app = new App();
    expect(app.ballStrikeCounter([1, 2, 3], [1, 3, 5])).toEqual([1, 1]);
  });

  test("낫싱인 경우", () => {
    const app = new App();
    const logSpy = getLogSpy();
    app.gameResult([0, 0]);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("낫싱"));
  });
  test("3스트라이크인 경우", () => {
    const app = new App();
    const logSpy = getLogSpy();
    app.gameResult([0, 3]);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
      )
    );
  });
  test("3볼인 경우", () => {
    const app = new App();
    const logSpy = getLogSpy();
    app.gameResult([3, 0]);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("3볼"));
  });
  test("2볼 1스트라이크인 경우", () => {
    const app = new App();
    const logSpy = getLogSpy();
    app.gameResult([2, 1]);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("2볼 1스트라이크")
    );
  });
});
