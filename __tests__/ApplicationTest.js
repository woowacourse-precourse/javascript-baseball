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

  test("게임 종료 후 재시작", () => {
    const randoms = [7, 4, 2, 5, 8, 9, 6, 4, 2];
    const answers = ["246", "135", "247", "742", "1", "589", "1", "589", "426", "642", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "1볼 1스트라이크",
      "낫싱",
      "2볼 1스트라이크",
      "3스트라이크",
      "3스트라이크",
      "낫싱",
      "3볼",
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

  test("게임 종료 후 재시작", () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const answers = ["123", "1", "456", "1", "789", "1", "123", "1", "456", "1", "789", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "3스트라이크",
      "게임 종료",
      "3스트라이크",
      "게임 종료",
      "3스트라이크",
      "게임 종료",
      "3스트라이크",
      "게임 종료",
      "3스트라이크",
      "게임 종료",
      "3스트라이크",
      "게임 종료",
      "프로그램을 종료합니다",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외 테스트(예측한 수의 자릿수가 3자리 보다 많을 때)", () => {
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트(예측한 수의 자릿수가 3자리 보다 적을 때)", () => {
    const randoms = [1, 3, 5];
    const answers = ["1"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트(예측한 수가 중복되는 수 일 때)", () => {
    const randoms = [1, 3, 5];
    const answers = ["515"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트(예측한 수 중에 가 숫자가 아닌 문자가 섞여있는 경우)", () => {
    const randoms = [1, 3, 5];
    const answers = ["13a"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트(예측한 수 전체가 숫자가 아닌 경우)", () => {
    const randoms = [1, 3, 5];
    const answers = ["!a오"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트(예측한 수에 이무것도 입력하지 않은 경우)", () => {
    const randoms = [1, 3, 5];
    const answers = [""];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트(예측한 수에 스페이스바(공백)' '을 입력한 경우)", () => {
    const randoms = [1, 3, 5];
    const answers = [" "];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트(메뉴에 선택 중 1,2가 아닌 수를 입력한 경우)", () => {
    const randoms = [1, 3, 5];
    const answers = ["135", "135"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트(메뉴에 선택 중 숫자가 아닌 것을 입력한 경우)", () => {
    const randoms = [1, 3, 5];
    const answers = ["135", "a"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트(메뉴에 선택 중 아무것도 입력하지 않은 경우)", () => {
    const randoms = [1, 3, 5];
    const answers = ["135", ""];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트(메뉴에 선택 중 스페이스바(공백)' '을 입력한 경우)", () => {
    const randoms = [1, 3, 5];
    const answers = ["135", " "];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
