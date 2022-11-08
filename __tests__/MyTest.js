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
  // 기본 동작
  test("낫싱, 스트라이크, 볼, 스트라이크&볼, 정답 모두 출력 후 게임 종료", () => {
    const randoms = [1, 3, 5];
    const answers = ["789", "124", "389", "173", "135", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "1스트라이크",
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

  test("재시작 시 예외 테스트", () => {
    const randoms = [1, 3, 5];
    const answers = ["135", "3"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  })

  test("중복 숫자 예외 테스트", () => {
    const randoms = [1, 3, 5];
    const answers = ["114"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("빈 문자열 테스트", () => {
    const randoms = [1, 3, 5];
    const answers = [""];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("공백 테스트", () => {
    const randoms = [1, 3, 5];
    const answers = ["   "];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("특수문자 테스트", () => {
    const randoms = [1, 3, 5];
    const answers = ["!?#"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("특수문자 테스트 2", () => {
    const randoms = [1, 3, 5];
    const answers = ["\t\n\\"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("3글자 미만 예외 테스트", () => {
    const randoms = [1, 3, 5];
    const answers = ["12"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("3글자 초과 예외 테스트", () => {
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("isNaN 입력 예외 테스트", () => {
    const randoms = [1, 3, 5];
    const answers = ["가나다"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
