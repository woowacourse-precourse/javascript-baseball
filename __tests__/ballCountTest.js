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
  test("볼 테스트", () => {
    const randoms = [1, 3, 5];
    const answers = ["524", "523", "513"];
    const logSpy = getLogSpy();
    const messages = ["1볼", "2볼", "3볼"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe("숫자 야구 게임", () => {
  test("스트라이크 테스트", () => {
    const randoms = [5, 8, 7];
    const answers = ["543", "567", "587"];
    const logSpy = getLogSpy();
    const messages = ["1스트라이크", "2스트라이크", "3스트라이크"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe("숫자 야구 게임", () => {
  test("볼 & 스트라이크 테스트", () => {
    const randoms = [6, 3, 2];
    const answers = ["234", "236"];
    const logSpy = getLogSpy();
    const messages = ["1볼 1스트라이크", "2볼 1스트라이크"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
