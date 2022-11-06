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

  test("isAllDifferent", () => {
    expect(App.isAllDifferent('123')).toEqual(true);
    expect(App.isAllDifferent('12')).toEqual(true);
    expect(App.isAllDifferent('1')).toEqual(true);
    expect(App.isAllDifferent('1abc')).toEqual(true);
    expect(App.isAllDifferent('abcd')).toEqual(true);
    expect(App.isAllDifferent('11')).toEqual(false);
    expect(App.isAllDifferent('112')).toEqual(false);
    expect(App.isAllDifferent('222')).toEqual(false);
    expect(App.isAllDifferent('aaaa')).toEqual(false);
    expect(App.isAllDifferent('12bb')).toEqual(false);
  });

  test("isCorrectInput", () => {
    // 1부터 9까지 서로 다른 수로 이루어진 세 자릿수인지 테스트
    expect(App.isCorrectInput('123')).toEqual(true);
    expect(App.isCorrectInput('135')).toEqual(true);
    expect(App.isCorrectInput('987')).toEqual(true);
    expect(App.isCorrectInput('1234')).toEqual(false);
    expect(App.isCorrectInput('012')).toEqual(false);
    expect(App.isCorrectInput('203')).toEqual(false);
    expect(App.isCorrectInput('1203')).toEqual(false);
    expect(App.isCorrectInput('abc')).toEqual(false);
    expect(App.isCorrectInput('1abc')).toEqual(false);
    expect(App.isCorrectInput('@#$')).toEqual(false);
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
