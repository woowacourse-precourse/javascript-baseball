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

describe("기능 목록 테스트", () => {
  test("컴퓨터가 랜덤 숫자 배열을 얻음", () => {
    const app = new App();
    app.setRandomNumbers();

    app.computer.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(9);
    });

    const [first, second, third] = app.computer;

    expect(first).not.toEqual(second);
    expect(first).not.toEqual(third);
    expect(second).not.toEqual(third);
  });

  test("사용자가 입력한 문자열 숫자를 숫자 배열로 변환", () => {
    const input = "123";

    const app = new App();
    const result = app.separateNumbers(input);

    expect(result).toContain(2, 1, 3);
    expect(result).toContainEqual(1, 2, 3);
  });

  test("사용자가 입력한 숫자와 컴퓨터의 랜덤 숫자를 비교하여 볼과 스트라이크를 계산", () => {
    const computerInputs = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 4],
      [1, 4, 5],
      [2, 4, 5],
      [1, 3, 4],
      [1, 3, 2],
      [1, 3, 4],
      [1, 3, 5],
    ];

    const userInputs = [
      [4, 5, 6],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [5, 1, 3],
      [5, 1, 3],
    ];

    const answers = [
      { strike: 0, ball: 0 },
      { strike: 3, ball: 0 },
      { strike: 2, ball: 0 },
      { strike: 1, ball: 0 },
      { strike: 0, ball: 1 },
      { strike: 1, ball: 1 },
      { strike: 1, ball: 2 },
      { strike: 0, ball: 2 },
      { strike: 0, ball: 3 },
    ];

    const app = new App();

    computerInputs.forEach((computer, index) => {
      const result = app.mark(computer, userInputs[index]);

      expect(result).toEqual(answers[index]);
    });
  });

  test("볼과 스트라이크의 개수로 사용자에게 결과를 알림", () => {
    const memos = [
      { strike: 0, ball: 0 },
      { strike: 3, ball: 0 },
      { strike: 2, ball: 0 },
      { strike: 1, ball: 0 },
      { strike: 0, ball: 1 },
      { strike: 1, ball: 1 },
      { strike: 1, ball: 2 },
      { strike: 0, ball: 2 },
      { strike: 0, ball: 3 },
    ];

    const messages = [
      "낫싱",
      "3스트라이크",
      "2스트라이크",
      "1스트라이크",
      "1볼",
      "1볼 1스트라이크",
      "2볼 1스트라이크",
      "2볼",
      "3볼",
    ];

    const logSpy = getLogSpy();

    const app = new App();

    memos.forEach((memo) => {
      app.printResultMessage(memo);
    });

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("게임 재시작 혹은 종료 입력을 얻음", () => {
    const randoms = [5, 8, 9];
    const answers = ["1", "589", "2"];
    const logSpy = getLogSpy();
    const messages = ["3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.replay();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("사용자 숫자를 입력할 때 잘못된 입력이 들어왔을 때 예외를 발생", () => {
    const answers = ["1234", "abc", "0.5"];
    const messages = [
      "separateNumbers/invalid-length",
      "separateNumbers/invalid-user-input",
      "separateNumbers/invalid-user-input",
    ];

    mockQuestions(answers);

    const app = new App();

    messages.forEach((message, index) => {
      expect(() => {
        app.separateNumbers(answers[index]);
      }).toThrow(message);
    });

    messages.forEach((message) => {
      expect(() => {
        app.guessNumbers();
      }).toThrow(message);
    });
  });

  test("재시작에 대해 잘못된 입력이 들어왔을 때 예외를 발생", () => {
    const answers = ["3"];

    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.replay();
    }).toThrow("replay/invalid-user-input");
  });
});
