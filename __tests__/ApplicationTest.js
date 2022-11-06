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

  test("isNumber", () => {
    expect(App.isNumber('1')).toEqual(true);
    expect(App.isNumber('123')).toEqual(true);
    expect(App.isNumber('01')).toEqual(false);
    expect(App.isNumber('abc')).toEqual(false);
  });

  test("isThreeDigit", () => {
    expect(App.isThreeDigit('123')).toEqual(true);
    expect(App.isThreeDigit('456')).toEqual(true);
    expect(App.isThreeDigit('982')).toEqual(true);
    expect(App.isThreeDigit('222')).toEqual(true);
    expect(App.isThreeDigit('12')).toEqual(false);
    expect(App.isThreeDigit('1')).toEqual(false);
    expect(App.isThreeDigit('012')).toEqual(false);
    expect(App.isThreeDigit('1234')).toEqual(false);
    expect(App.isThreeDigit('abc')).toEqual(false);
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
