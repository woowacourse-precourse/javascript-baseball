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
  test("정상 예제 테스트 1 : 1 게임 진행", () => {
    const randoms = [9, 1, 8];
    const answers = ["153", "347", "172", "168", "374", "981", "718", "918"];
    const logSpy = getLogSpy();
    const messages = [
      "1볼",
      "낫싱",
      "1볼",
      "1볼 1스트라이크",
      "낫싱",
      "2볼 1스트라이크",
      "2스트라이크",
      "3스트라이크",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("정상 예제 테스트 2 : 게임 종료 후 재시작", () => {
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

  test("정상 예제 테스트 3 : 게임 종료 후 재시작", () => {
    const randoms = [7, 1, 3, 1, 2, 3];
    const answers = ["123", "145", "671", "216", "713", "1", "715", "123", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "1볼 1스트라이크",
      "1볼",
      "2볼",
      "1스트라이크",
      "3스트라이크",
      "1볼",
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

  test("정상 예제 테스트 4 : 게임 종료 후 재시작", () => {
    const randoms = [5, 6, 8, 1, 2, 9];
    const answers = [
      "354",
      "126",
      "719",
      "518",
      "538",
      "568",
      "1",
      "123",
      "456",
      "789",
      "129",
      "2",
    ];
    const logSpy = getLogSpy();
    const messages = [
      "1볼",
      "1볼",
      "낫싱",
      "2스트라이크",
      "2스트라이크",
      "3스트라이크",
      "2스트라이크",
      "낫싱",
      "1스트라이크",
      "3스트라이크",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("잘못된 입력 테스트1 : 3자리가 아닌 수", () => {
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("잘못된 입력 테스트2 : 하나라도 숫자가 아닌 경우", () => {
    const randoms = [4, 7, 2];
    const answers = ["1e3"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("잘못된 입력 테스트3 : 같은 숫자가 2회 이상 입력될 시", () => {
    const randoms = [4, 7, 2];
    const answers = ["442"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("잘못된 입력 테스트4 : 0이 들어왔을 때", () => {
    const randoms = [4, 7, 2];
    const answers = ["419", "707"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
