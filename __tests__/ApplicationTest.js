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
  test("메서드 테스트", () => {
    const app = new App();

    expect(app.checkDistinct("123")).toEqual(true);
    expect(app.checkDistinct("454")).toEqual(false);

    mockQuestions(["123"]);
    app.inputUserNumber();
    expect(app.user).toEqual([1, 2, 3]);

    mockRandoms([1, 9, 2]);
    app.setComputerNumber();
    expect(app.computer).toEqual([1, 9, 2]);

    app.calcScore();
    expect(app.score.strike).toBe(1);
    expect(app.score.ball).toBe(1);

    const logSpy = getLogSpy();
    app.printResult();
    expect(logSpy).toHaveBeenCalledWith("1볼 1스트라이크");

    mockQuestions(["1", "2"]);
    app.setIsContinued();
    expect(app.isContinued).toEqual(true);
    app.setIsContinued();
    expect(app.isContinued).toEqual(false);

    app.initializeScore();
    expect(app.user).toEqual([]);
    expect(app.score).toEqual({ ball: 0, strike: 0 });
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
