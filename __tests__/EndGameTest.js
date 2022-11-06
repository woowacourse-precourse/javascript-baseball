const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestion = (input) => {
  MissionUtils.Console.readLine = jest.fn();
  MissionUtils.Console.readLine.mockImplementationOnce((question, callback) => {
    callback(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe.only("게임 종료 테스트", () => {
  test("게임 종료 문구 출력 확인", () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.endPlayerTurn();

    expect(logSpy).toHaveBeenCalledWith("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  });

  test("게임 재시작", () => {
    const app = new App();
    const playSpy = jest.spyOn(app, "play");

    app.endPlayerTurn();
    mockQuestion(1);

    expect(playSpy).toHaveBeenCalled();
  });

  test("프로그램 종료", () => {
    const app = new App();
    const closeSpy = jest.spyOn(MissionUtils.Console, "close");

    app.endPlayerTurn();
    mockQuestion(2);

    expect(closeSpy).toHaveBeenCalled();
  });

  test("입력 예외 처리", () => {
    mockQuestion(3);

    expect(() => {
      const app = new App();
      app.endPlayerTurn();
    }).toThrow();
  });
});
