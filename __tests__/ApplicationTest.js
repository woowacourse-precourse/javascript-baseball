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

const getAppSpy = (app, methodName) => {
  const appSpy = jest.spyOn(app, methodName);
  appSpy.mockClear();
  return appSpy;
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
});

describe("custom test", () => {
  // Custom Test
  const app = new App();
  const compareWithUserNumberSpy = getAppSpy(app, "compareWithUserNumber");

  test("기능#1 테스트: 사용자에게 게임을 시작한다는 문장을 출력해보인다.", () => {
    const randoms = [1, 3, 5];
    const answers = ["123", "135", "2"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const logSpy = getLogSpy();

    app.play();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("숫자 야구 게임을 시작합니다.")
    );
  });

  test("기능#4 테스트: 이 과정을 사용자가 입력한 숫자와 컴퓨터의 숫자가 일치할 때까지 반복한다.", () => {
    expect(compareWithUserNumberSpy).toBeCalledTimes(2);
  });

  test("기능#3 예외 테스트", () => {
    const randoms = [1, 3, 5];
    const answers = ["ㄱㄴa"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
