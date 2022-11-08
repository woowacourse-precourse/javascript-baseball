const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임", () => {
  test("게임 종료 후 재시작", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "1", "597", "589", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "3스트라이크",
      "1볼 1스트라이크",
      "3스트라이크",
      "게임 종료",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외 테스트", () => {
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("3개의 수 입력값이 유효한 경우 true를 반환한다.", () => {
    const answers = "123";
    const app = new App();
    const testResult = app.isValid(answers);

    expect(testResult).toEqual(true);
  });

  test("3개의 수 입력값 중 중복 숫자가 있는 경우 false를 반환한다.", () => {
    const answers = "112";
    const app = new App();
    const testResult = app.isValid(answers);

    expect(testResult).toEqual(false);
  });

  test("3개의 수 입력값이 숫자가 아닌 경우 false를 반환한다.", () => {
    const answers = "ab3";
    const app = new App();
    const testResult = app.isValid(answers);

    expect(testResult).toEqual(false);
  });

  test("3개의 수 입력값이 3자리 초과인 경우 false를 반환한다.", () => {
    const answers = "1234";
    const app = new App();
    const testResult = app.isValid(answers);

    expect(testResult).toEqual(false);
  });

  test("3개의 수 입력값이 3자리 미만인 경우 false를 반환한다.", () => {
    const answers = "56";
    const app = new App();
    const testResult = app.isValid(answers);

    expect(testResult).toEqual(false);
  });

  test("유효하지 않은 값을 입력한 경우 예외를 발생시킨다.", () => {
    const answers = ["112"];

    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.inputNumber();
    }).toThrow();
  });

  test("유효한 값을 입력한 경우 입력값을 playerNumber에 저장한다.", () => {
    const answers = ["123"];

    mockQuestions(answers);

    const app = new App();
    app.inputNumber();
    const testResult = app.playerNumber.join("");

    expect(testResult).toEqual("123");
  });

  test("게임 종료 후 1을 입력한 경우 게임을 새로 시작한다.", () => {
    const randoms = [1, 2, 3];
    const answers = ["1", "123", "2"];
    const logSpy = getLogSpy();
    const messages = ["게임 종료", "시작합니다"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.gameOver();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("게임 종료 후 2를 입력한 경우 게임을 종료한다.", () => {
    const answers = ["2"];

    mockQuestions(answers);

    const app = new App();
    const testResult = app.gameOver();

    expect(testResult).toEqual(undefined);
  });

  test("게임 종료 후 입력값이 1 또는 2가 아닌 경우 예외를 발생시킨다.", () => {
    const answers = ["3"];
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.gameOver();
    }).toThrow();
  });

  test("입력값 중 2개의 숫자를 맞힌 경우, 2볼을 반환한다.", () => {
    const app = new App();
    app.computerNumber = ["4", "5", "2"];
    app.playerNumber = ["2", "4", "3"];
    const testResult = app.getHint();

    expect(testResult).toContain("2볼");
  });

  test("입력값 중 1개의 자리와 숫자를 맞혔을 경우, 1스트라이크를 반환한다.", () => {
    const app = new App();
    app.computerNumber = [1, 5, 9];
    app.playerNumber = [2, 3, 9];
    const testResult = app.getHint();

    expect(testResult).toContain("1스트라이크");
  });

  test("입력값 중 1개의 숫자와 1개의 자리, 숫자를 맞혔을 경우, 1볼 1스트라이크를 반환한다.", () => {
    const app = new App();
    app.computerNumber = [3, 5, 9];
    app.playerNumber = [2, 3, 9];
    const testResult = app.getHint();

    expect(testResult).toContain("1볼", "1스트라이크");
  });

  test("입력값 중 하나도 맞히지 못한 경우, 낫싱을 반환한다.", () => {
    const app = new App();
    app.computerNumber = [3, 6, 9];
    app.playerNumber = [2, 1, 4];
    const testResult = app.getHint();

    expect(testResult).toContain("낫싱");
  });

  test("힌트가 3스트라이크인 경우, 게임이 종료 된다.", () => {
    const answers = ["2"];
    const logSpy = getLogSpy();
    const messages = ["게임 종료"];
    const hint = ["3스트라이크"];

    mockQuestions(answers);

    const app = new App();
    app.decideWin(hint);

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("힌트가 3스트라이크가 아닌 경우, 게임이 계속 진행된다.", () => {
    const answers = ["123", "2"];
    const logSpy = getLogSpy();
    const messages = ["게임 종료"];
    const hint = ["1볼"];

    mockQuestions(answers);

    const app = new App();
    app.computerNumber = [1, 2, 3];
    app.decideWin(hint);

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("initialize 메서드 실행 시 computerNumber가 초기화된다.", () => {
    const app = new App();
    app.computerNumber = [1, 2, 3];
    app.initialize();

    expect(app.computerNumber).toEqual([]);
  });

  test("initialize 메서드 실행 시 playerNumber가 초기화된다.", () => {
    const app = new App();
    app.playerNumber = [1, 2, 3];
    app.initialize();

    expect(app.playerNumber).not.toEqual([1, 2, 3]);
  });
});
