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
    const randoms = [6, 8, 9, 2, 4, 3, 7, 2, 4];
    const answers = [
      "246",
      "135",
      "689",
      "1",
      "597",
      "589",
      "243",
      "1",
      "724",
      "2",
    ];
    const logSpy = getLogSpy();
    const messages = [
      "1볼",
      "낫싱",
      "3스트라이크",
      "낫싱",
      "낫싱",
      "3스트라이크",
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
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const answers = [
      "132",
      "123",
      "1",
      "123",
      "123",
      "123",
      "124",
      "456",
      "1",
      "789",
      "2",
    ];
    const logSpy = getLogSpy();
    const messages = [
      "2볼 1스트라이크",
      "3스트라이크",
      "낫싱",
      "낫싱",
      "낫싱",
      "1볼",
      "3스트라이크",
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

  test("게임 재시작 후 예외 테스트 1 또는 2 이외의 문자가 들어왔을 경우", () => {
    const randoms = [6, 8, 9];
    const answers = ["246", "135", "689", "3"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트 같은 숫자를 여러 번 입력했을 때", () => {
    const randoms = [1, 3, 5];
    const answers = ["122"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트 숫자를 3글자 이상 입력했을 때", () => {
    const randoms = [1, 3, 5];
    const answers = ["12345"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트 숫자 이외의 문자가 있을 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["12a"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트 숫자 0이 포함되어 있을 경우", () => {
    const randoms = [1, 3, 5];
    const answers = ["120"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
