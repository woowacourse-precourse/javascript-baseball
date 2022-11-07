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

describe("게임 플러이어 입력 예외 처리 Test", () => {
  const app = new App();

  test("숫자가 아닌 문자가 입력으로 들어오는 경우 ", () => {
    expect(() => app.isValidPlayerInput("이삼오")).toThrow(
      "숫자로만 입력해주세요."
    );
    expect(() => app.isValidPlayerInput("/+*'~")).toThrow(
      "숫자로만 입력해주세요."
    );
  });

  test("3자리의 수가 아닌 입력이 들어오는 경우", () => {
    expect(() => app.isValidPlayerInput("01")).toThrow(
      "3자리의 수를 입력해주세요."
    );
    expect(() => app.isValidPlayerInput("5984")).toThrow(
      "3자리의 수를 입력해주세요."
    );
  });

  test("1부터 9까지의 범위를 벗어난 입력이 들어온 경우", () => {
    expect(() => app.isValidPlayerInput("809")).toThrow(
      "1부터 9까지의 수만 입력해주세요."
    );
    expect(() => app.isValidPlayerInput("800")).toThrow(
      "1부터 9까지의 수만 입력해주세요."
    );
  });

  test("중복된 숫자를 포함한 입력이 들어오는 경우", () => {
    expect(() => app.isValidPlayerInput("772")).toThrow(
      "서로 다른 3자리를 입력해주세요."
    );
    expect(() => app.isValidPlayerInput("131")).toThrow(
      "서로 다른 3자리를 입력해주세요."
    );
  });

  test("1(재시작) 또는 2(종료) 이외의 입력이 들어오는 경우", () => {
    expect(() => app.isValidReplayNum("0")).toThrow("1 또는 2를 입력하세요.");
    expect(() => app.isValidReplayNum("종료")).toThrow(
      "1 또는 2를 입력하세요."
    );
    expect(() => app.isValidReplayNum("876")).toThrow("1 또는 2를 입력하세요.");
  });
});
