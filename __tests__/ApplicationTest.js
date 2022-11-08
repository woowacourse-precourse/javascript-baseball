const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES, ERRORS } = require("../src/constants");

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
  test("게임 시작을 알리는 메시지를 출력해야 합니다.", () => {
    // given
    const logSpy = getLogSpy();

    // when
    const app = new App();
    app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(MESSAGES.START),
    );
  });

  test("입력이 세 자리의 수가 아니라면 예외를 발생시킨 후 게임을 종료합니다.", () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["1234", "4567", "6789"];

    // when, then
    answers.forEach((answer) => {
      mockRandoms(randoms);
      mockQuestions([answer]);

      expect(() => {
        const app = new App();
        app.play();
      }).toThrow(ERRORS.UNVALID_INPUT_LENGTH);
    });
  });

  test("입력이 서로 다른 세 자리의 수가 아니라면 예외를 발생시킨 후 게임을 종료합니다.", () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["333", "121", "288"];

    // when, then
    answers.forEach((answer) => {
      mockRandoms(randoms);
      mockQuestions([answer]);

      expect(() => {
        const app = new App();
        app.play();
      }).toThrow(ERRORS.UNVALID_INPUT_VALUE);
    });
  });

  test("입력값에 0이 포함되어 있다면 예외를 발생시킨 후 게임을 종료합니다.", () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["130", "013", "103"];

    // when, then
    answers.forEach((answer) => {
      mockRandoms(randoms);
      mockQuestions([answer]);

      expect(() => {
        const app = new App();
        app.play();
      }).toThrow(ERRORS.UNVALID_INPUT_RANGE);
    });
  });

  test("입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시해야 합니다.", () => {
    // given
    const randoms = [1, 3, 5];
    const answers = [
      "246",
      "461",
      "413",
      "351",
      "146",
      "143",
      "153",
      "136",
      "135",
    ];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "1볼",
      "2볼",
      "3볼",
      "1스트라이크",
      "1볼 1스트라이크",
      "2볼 1스트라이크",
      "2스트라이크",
      "3스트라이크",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when
    const app = new App();
    app.play();

    // then
    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("3개의 숫자를 모두 맞힌 경우 스트라이크 개수와 게임 종료 메시지를 출력해야 합니다.", () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["135"];
    const logSpy = getLogSpy();
    const messages = [
      "3스트라이크",
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when
    const app = new App();
    app.play();

    // then
    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("게임 종료 후 재시작 여부를 묻고, 2를 입력 시 완전히 종료해야 합니다.", () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["246", "135", "2"];
    const logSpy = getLogSpy();
    const messages = ["낫싱", "3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    // when
    const app = new App();
    app.play();

    // then
    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("게임 종료 후 재시작 여부를 묻고, 1을 입력 시 새로운 정답고 함께 게임을 재시작해야 합니다.", () => {
    // given
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

    // when
    const app = new App();
    app.play();

    // then
    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("재시작 여부를 물을 때, 1과 2가 아닌 입력의 경우 예외를 발생시키고 게임을 종료해야 합니다.", () => {
    // given
    const randoms = [1, 3, 5];
    const answers = [
      ["135", "3"],
      ["135", "a"],
      ["135", null],
    ];

    // when, then
    answers.forEach((answer) => {
      mockRandoms(randoms);
      mockQuestions(answer);

      expect(() => {
        const app = new App();
        app.play();
      }).toThrow(ERRORS.UNVALID_RESTART_OPTION);
    });
  });

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
});
