const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  // 입력한 값들.
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

  test("정상 종료 예제", () => {
    const randoms = [1, 6, 5];
    const answers = ["246", "135", "165", "2"];
    const logSpy = getLogSpy();
    const messages = ["1볼", "2스트라이크", "3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외 테스트2", () => {
    const randoms = [1, 3, 5];
    const answers = ["012"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("makeUserInputNumber 예외 테스트", () => {
    const answers = ["1234"];
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.makeUserInputNumber();
    }).toThrow("세자리 숫자가 아닙니다!");
  });

  test("makeUserInputNumber 정상 작동 테스트", () => {
    const answers = ["456"];
    mockQuestions(answers);

    const app = new App();
    app.makeUserInputNumber();
    expect(app.userInputNumber).toEqual([4, 5, 6]);
  });

  test("countBall 정상 작동 테스트", () => {
    const randoms = [5, 8, 1];
    const answers = ["158"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.makeRandomNumber();
    app.makeUserInputNumber();

    const ball = app.countBall(app.randomNumber, app.userInputNumber);
    expect(ball).toBe(3);
  });
});
