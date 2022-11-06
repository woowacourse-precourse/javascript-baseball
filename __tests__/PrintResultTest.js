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

describe("스트라이크, 볼 결과 출력 기능 테스트", () => {
  test("3스트라이크일 경우", () => {
    const randoms = [1, 2, 3];
    const answers = ["123", "2"];
    const logSpy = getLogSpy();
    const messages = ["3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("스트라이크와 볼 모두 있는 경우", () => {
    const randoms = [1, 2, 3];
    const answers = ["132", "325"];
    const logSpy = getLogSpy();
    const messages = ["2볼 1스트라이크", "1볼 1스트라이크"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("스트라이크만 있는 경우", () => {
    const randoms = [1, 2, 3];
    const answers = ["145", "423"];
    const logSpy = getLogSpy();
    const messages = ["1스트라이크", "2스트라이크"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("볼만 있는 경우", () => {
    const randoms = [1, 2, 3];
    const answers = ["314", "435"];
    const logSpy = getLogSpy();
    const messages = ["2볼", "1볼"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("스트라이크와 볼이 없는 경우", () => {
    const randoms = [1, 2, 3];
    const answers = ["456", "789"];
    const logSpy = getLogSpy();
    const messages = ["낫싱", "낫싱"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
