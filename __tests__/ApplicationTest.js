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

  test("게임 1회 동작, 재시작X", () => {
    const randoms = [7, 8, 9];
    const answers = ["185", "273", "728", "987", "789", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "1스트라이크",
      "1볼",
      "1볼 1스트라이크",
      "2볼 1스트라이크",
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

  test("볼/스트라이크 가능한 경우들 확인, 재시작 1번", () => {
    const randoms = [5, 2, 3, 1, 2, 7, 6, 8, 9];
    const answers = ["789", "369", "652", "235", "567", "573", "523", "1", "723", "172", "127", "1", "689", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "1볼",
      "2볼",
      "3볼",
      "1스트라이크",
      "2스트라이크",
      "3스트라이크",
      "1볼 1스트라이크",
      "2볼 1스트라이크",
      "3스트라이크",
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

  test("게임 10회 (재시작 9회)", () => {
    const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 3, 5, 2, 4, 6, 3, 5, 7, 4, 6, 8, 5, 7, 9, 9, 5, 1, 1, 5, 9];
    const answers = ["123", "1", "456", "1", "789", "1", "135", "1", "246", "1", "357", "1", "468", "1", "579", "1", "951", "1", "159", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "3스트라이크",
      "3스트라이크",
      "3스트라이크",
      "3스트라이크",
      "3스트라이크",
      "3스트라이크",
      "3스트라이크",
      "3스트라이크",
      "3스트라이크",
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
});
