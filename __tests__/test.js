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
  test("게임 종료 후 완전 종료하기", () => {
    const randoms = [2, 3, 6];
    const answers = ["246", "185", "632", "678", "236", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "2스트라이크",
      "낫싱",
      "2볼 1스트라이크",
      "1볼",
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

  test("서로 같은 숫자가 있으면 예외발생", () => {
    const randoms = [2, 3, 6];
    const answers = ["115"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("1-9 숫자 외 입력하면 예외발생", () => {
    const randoms = [4, 7, 8];
    const answers = ["078"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("재시작시 1이나 종료시 2 외 선택시 예외발생", () => {
    const randoms = [4, 7, 8];
    const answers = ["478", "3"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
