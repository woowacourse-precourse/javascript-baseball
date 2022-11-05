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

  test("3개의 수 입력값이 유효한 경우 true를 반환한다.", () => {
    const answers = "123";
    const app = new App();
    const testResult = app.isValid(answers);

    expect(testResult).toEqual(true);
  });

  test("3개의 수 입력값 중 중복 숫자가 있는 경우 false를 반환한다.", () => {
    const answers = "112";
    const app = new App();
    const testResult = app.isValid(answers);

    expect(testResult).toEqual(false);
  });

  test("3개의 수 입력값이 숫자가 아닌 경우 false를 반환한다.", () => {
    const answers = "ab3";
    const app = new App();
    const testResult = app.isValid(answers);

    expect(testResult).toEqual(false);
  });

  test("3개의 수 입력값이 3자리 초과인 경우 false를 반환한다.", () => {
    const answers = "1234";
    const app = new App();
    const testResult = app.isValid(answers);

    expect(testResult).toEqual(false);
  });

  test("3개의 수 입력값이 3자리 미만인 경우 false를 반환한다.", () => {
    const answers = "56";
    const app = new App();
    const testResult = app.isValid(answers);

    expect(testResult).toEqual(false);
  });
});
