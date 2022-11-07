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

  test("1부터 9까지 서로 다른 수로 이루어진 컴퓨터의 3자리 수 배열을 생성하는 경우 ", () => {
    const computerNumArr = app.getComputerNum();
    const set = new Set(computerNumArr);

    expect(computerNumArr).not.toContain(0); // 1부터 9까지인지
    expect(computerNumArr).toHaveLength(3); // 3자리인지
    expect(Array.from(set)).toHaveLength(3); // 서로 다른 수인지
  });

  test("힌트를 얻는 경우", () => {
    expect(app.getHint("123", "123")).toEqual({ ball: 0, strike: 3 });
    expect(app.getHint("831", "583")).toEqual({ ball: 2, strike: 0 });
    expect(app.getHint("159", "419")).toEqual({ ball: 1, strike: 1 });
  });

  test("힌트를 출력하는 경우", () => {
    const logSpy = getLogSpy();

    app.printHint(1, 1);
    expect(logSpy).toHaveBeenCalledWith("1볼 1스트라이크");
    app.printHint(0, 3);
    expect(logSpy).toHaveBeenCalledWith("3스트라이크");
    app.printHint(2, 1);
    expect(logSpy).toHaveBeenCalledWith("2볼 1스트라이크");
    app.printHint(0, 0);
    expect(logSpy).toHaveBeenCalledWith("낫싱");
  });
});
