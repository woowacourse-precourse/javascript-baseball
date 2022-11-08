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

  test("게임 종료 후 재시작 후 재시작", () => {
    const randoms = [1, 3, 5, 5, 8, 9, 2, 4, 6];
    const answers = ["246", "135", "1", "597", "589", "1", "123", "456", "246", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "3스트라이크",
      "1볼 1스트라이크",
      "3스트라이크",
      "1볼",
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
    const answers = ["1234"];
    
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트2", () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = [1.1, 2, 3];
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트3", () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["2234"];
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트4", () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["0123"];
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트5", () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["00123"];
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트6", () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["12"];
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트7", () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["9", "8", 12];
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트8", () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["9", "8", "7"];
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트9", () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = [1344];
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트10", () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = [992];
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트11", () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["a12"];
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트12", () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["1b2"];
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트13", () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["9_8"];
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트14", () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    mockRandoms(randoms);
    const answers = ["910"];
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
