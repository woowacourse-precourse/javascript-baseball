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

describe("숫자야구 기능 테스트", () => {
  test("게임시작 후 종료까지", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "153", "135", "1", "697", "587", "589", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "2볼 1스트라이크",
      "3스트라이크",
      "1볼",
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

  test("0입력 불가 확인", () => {
    const randoms = [1, 3, 5];
    const answers = ["014"];
    mockRandoms(randoms);
    mockQuestions(answers);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("숫자 중복 불가 확인", () => {
    const randoms = [1, 3, 5];
    const answers = ["113"];
    mockRandoms(randoms);
    mockQuestions(answers);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("문자입력 불가", () => {
    const randoms = [1, 3, 5];
    const answers = ["ㄴㄹㄹ"];
    mockRandoms(randoms);
    mockQuestions(answers);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("3개 이상 입력 불가", () => {
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
