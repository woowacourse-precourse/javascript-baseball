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

describe("볼, 스트라이크 개수 결과 출력 테스트", () => {
  test("낫싱", () => {
    const randoms = [1, 4, 7];
    const answers = ['258'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('낫싱'));
  });

  test("1볼", () => {
    const randoms = [1, 4, 7];
    const answers = ['496'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('1볼'));
  });

  test("2볼", () => {
    const randoms = [2, 3, 5];
    const answers = ['528'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('2볼'));
  });

  test("3볼", () => {
    const randoms = [3, 1, 6];
    const answers = ['163'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('3볼'));
  });

  test("1스트라이크", () => {
    const randoms = [4, 1, 9];
    const answers = ['317'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('1스트라이크'));
  });
  
  test("2스트라이크", () => {
    const randoms = [4, 1, 9];
    const answers = ['417'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('2스트라이크'));
  });

  test("1볼 1스트라이크", () => {
    const randoms = [6, 1, 7];
    const answers = ['715'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('1볼 1스트라이크'));
  });

  test("2볼 1스트라이크", () => {
    const randoms = [6, 1, 7];
    const answers = ['716'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('2볼 1스트라이크'));
  });

  test("3스트라이크", () => {
    const randoms = [6, 1, 7];
    const answers = ['617'];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('3스트라이크 \n3개의 숫자를 모두 맞히셨습니다! 게임 종료'));
  });
});