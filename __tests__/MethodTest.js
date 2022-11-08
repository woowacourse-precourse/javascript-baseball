const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const app = new App();

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("메서드 테스트", () => {
  test("컴퓨터값 생성", () => {
    const numberLength = new Set(app.createNumber()).size;
    const validRange = app.createNumber().match(/[1-9]{3}/g) != null;
    expect(numberLength).toBe(3);
    expect(validRange).toBe(true);
  });

  test("입력 유효값 검사 함수 테스트", () => {
    expect(() => app.validUserInput("121")).toThrow();
    expect(() => app.validUserInput("f1g")).toThrow();
    expect(() => app.validUserInput("111")).toThrow();
    expect(() => app.validUserInput("1234")).toThrow();
    expect(app.validUserInput("123")).toBe(true);
  });

  test("스트라이크 카운터", () => {
    let result = app.countStrike("123", "456");
    expect(result).toBe(0);
    result = app.countStrike("123", "156");
    expect(result).toBe(1);
    result = app.countStrike("123", "124");
    expect(result).toBe(2);
    result = app.countStrike("123", "123");
    expect(result).toBe(3);
  });

  test("볼 카운터", () => {
    let result = app.countBall("123", "456");
    expect(result).toBe(0);
    result = app.countBall("123", "156");
    expect(result).toBe(1);
    result = app.countBall("123", "124");
    expect(result).toBe(2);
    result = app.countBall("123", "123");
    expect(result).toBe(3);
  });

  test("게임 결과 함수", () => {
    const logSpy = getLogSpy();
    app.gameResult("123", "456");
    expect(logSpy).toHaveBeenCalledWith("낫싱");
    app.gameResult("145", "457");
    expect(logSpy).toHaveBeenCalledWith("2볼");
    app.gameResult("123", "156");
    expect(logSpy).toHaveBeenCalledWith("1스트라이크");
    app.gameResult("123", "123");
    expect(logSpy).toHaveBeenCalledWith("3스트라이크");
  });

  test("게임 재개 여부 함수", () => {
    const restartSpy = jest.spyOn(app, "play");
    const closeSpy = jest.spyOn(MissionUtils.Console, "close");

    MissionUtils.Console.readLine = jest
      .fn()
      .mockImplementationOnce((question, callback) => {
        callback("1");
      });

    app.selectReplay();
    expect(restartSpy).toHaveBeenCalled();

    MissionUtils.Console.readLine.mockImplementationOnce(
      (question, callback) => {
        callback("2");
      }
    );
    app.selectReplay();
    expect(closeSpy).toHaveBeenCalled();

    MissionUtils.Console.readLine.mockImplementationOnce(
      (question, callback) => {
        callback("3");
      }
    );
    expect(() => app.selectReplay()).toThrow();
  });
});
