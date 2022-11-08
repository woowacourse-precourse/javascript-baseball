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

  test("중복된 숫자 3개가 입력으로 들어온 경우", () => {
    const randoms = [4, 5, 6];
    const answers = ["133"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  })

  test("3개가 넘는 숫자가 입력으로 들어온 경우", () => {
    const randoms = [4, 5, 6];
    const answers = ["1753"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  })

  test("3개가 넘는 중복된 숫자가 입력으로 들어온 경우", () => {
    const randoms = [4, 5, 6];
    const answers = ["17531753"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  })

  test("3볼, 3스트라이크 출력 후 게임 종료 되는 경우", () => {
    const randoms = [4, 5, 6];
    const answers = ["564", "456", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "3볼",
      "3스트라이크",
      "게임 종료"
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("3스트라이크 출력 후 게임 다시 시작, 1스트라이크 1볼, 낫싱, 3스트라이크, 게임 종료되는 경우", () => {
    const randoms = [7, 2, 4, 5, 6, 8];
    const answers = ["724", "1", "589", "214", "568", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "3스트라이크",
      "1볼 1스트라이크",
      "낫싱",
      "3스트라이크",
      "게임 종료"
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("게임 종료 후 재시작과 종료 입력 시 예외처리", () => {
    const randoms = [4, 5, 6];
    const answers = ["564", "456", "7"];
    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("3번 연속 게임 재시작 후 종료하는 경우", () => {
    const randoms = [7, 2, 4, 5, 6, 8, 1, 2, 4, 8, 9, 7];
    const answers = ["724", "1", "568", "1", "124", "1", "897", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "3스트라이크",
      "3스트라이크",
      "3스트라이크",
      "게임 종료"
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
