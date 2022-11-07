const App = require("../src/App");
const BaseballGame = require("../src/BaseballGame");
const MissionUtils = require("@woowacourse/mission-utils");

const baseballGame = new BaseballGame();

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

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

const checkComputerRandomArray = (array) => {
  const checkSet = new Set(array);

  if ([...checkSet].length < 3) return false;

  return true;
};

describe("기능 테스트", () => {
  test("인삿말 테스트", () => {
    const logSpy = getLogSpy();

    baseballGame.greeting();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("숫자 야구 게임을 시작합니다."));
  });

  test("컴퓨터 난수 배열 테스트", () => {
    baseballGame.computer.makeRandomNumberArray();
    const testArray = baseballGame.computer.computerRandomNumberArray;

    expect(checkComputerRandomArray(testArray)).toBeTruthy();
  });

  test("게임 종료 후 재시작", () => {
    const randoms = [3, 6, 9, 2, 7, 8];
    const answers = ["123", "136", "369", "1", "123", "238", "278", "2"];
    const logSpy = getLogSpy();
    const messages = ["1볼", "2볼", "3스트라이크", "1볼", "2스트라이크", "3스트라이크", "게임 종료"];

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
    const answers = ["122"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
