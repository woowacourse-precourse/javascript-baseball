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
    const answers = ["246", "753", "135", "1", "597", "789", "589", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "2볼",
      "3스트라이크",
      "1볼 1스트라이크",
      "2스트라이크",
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
});

describe("예외 테스트", () => {
  test("중복 숫자 입력 시", () => {
    const randoms = [1, 3, 5];
    const answers = ["113"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("중복된 수는 입력할 수 없습니다.");
  });

  test("세 자리 수 이상 입력 시", () => {
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("세 자리 수만 입력할 수 있습니다.");
  });

  test("숫자 외 문자 입력 시", () => {
    const randoms = [1, 3, 5];
    const answers = ["a!ㄱ"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("숫자만 입력할 수 있습니다.");
  });

  test("숫자 0 입력 시", () => {
    const randoms = [1, 3, 5];
    const answers = ["109"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("0은 입력할 수 없습니다.");
  });

  test("게임 재시작 시", () => {
    const randoms = [1, 3, 5];
    const answers = ["135", "9"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("1 또는 2만 입력할 수 있습니다.");
  });
});
