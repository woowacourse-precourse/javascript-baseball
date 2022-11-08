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
    const messages = ["낫싱", "3스트라이크", "1볼 1스트라이크", "3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("게임 종료 후 1, 2 이외의 값이 입력된 경우 예외 발생", () => {
    const randoms = [1, 3, 5];
    const answers = ["246", "135", "0"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});

describe("getResultScore(): strike, ball, nothing 계산", () => {
  test("낫싱", () => {
    const answer = "135";
    const input = "246";

    const app = new App();

    expect(app.getResultScore(answer, input)).toEqual([0, 0, true]);
  });

  test("1볼", () => {
    const answer = "135";
    const input = "256";
    const app = new App();

    expect(app.getResultScore(answer, input)).toEqual([0, 1, false]);
  });

  test("1볼 1스트라이크", () => {
    const answer = "135";
    const input = "365";

    const app = new App();

    expect(app.getResultScore(answer, input)).toEqual([1, 1, false]);
  });

  test("3스트라이크", () => {
    const answer = "135";
    const input = "135";

    const app = new App();

    expect(app.getResultScore(answer, input)).toEqual([3, 0, false]);
  });
});
