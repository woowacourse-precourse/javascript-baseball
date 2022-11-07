const App = require("../src/App");
const ValidationCheck = require("../src/ValidationCheck");
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

  test("consistsOfPositiveNumber", () => {
    expect(ValidationCheck.consistsOfPositiveNumber('1')).toEqual(true);
    expect(ValidationCheck.consistsOfPositiveNumber('123')).toEqual(true);
    expect(ValidationCheck.consistsOfPositiveNumber('01')).toEqual(false);
    expect(ValidationCheck.consistsOfPositiveNumber('abc')).toEqual(false);
  });

  test("isThreeDigit", () => {
    expect(ValidationCheck.isThreeDigit('123')).toEqual(true);
    expect(ValidationCheck.isThreeDigit('456')).toEqual(true);
    expect(ValidationCheck.isThreeDigit('982')).toEqual(true);
    expect(ValidationCheck.isThreeDigit('222')).toEqual(true);
    expect(ValidationCheck.isThreeDigit('12')).toEqual(false);
    expect(ValidationCheck.isThreeDigit('1')).toEqual(false);
    expect(ValidationCheck.isThreeDigit('012')).toEqual(false);
    expect(ValidationCheck.isThreeDigit('1234')).toEqual(false);
    expect(ValidationCheck.isThreeDigit('abc')).toEqual(false);
  });

  test("isAllDifferent", () => {
    expect(ValidationCheck.isAllDifferent('123')).toEqual(true);
    expect(ValidationCheck.isAllDifferent('12')).toEqual(true);
    expect(ValidationCheck.isAllDifferent('1')).toEqual(true);
    expect(ValidationCheck.isAllDifferent('1abc')).toEqual(true);
    expect(ValidationCheck.isAllDifferent('abcd')).toEqual(true);
    expect(ValidationCheck.isAllDifferent('11')).toEqual(false);
    expect(ValidationCheck.isAllDifferent('112')).toEqual(false);
    expect(ValidationCheck.isAllDifferent('222')).toEqual(false);
    expect(ValidationCheck.isAllDifferent('aaaa')).toEqual(false);
    expect(ValidationCheck.isAllDifferent('12bb')).toEqual(false);
  });

  test("isCorrectInput", () => {
    // 1부터 9까지 서로 다른 수로 이루어진 세 자릿수인지 테스트
    expect(ValidationCheck.isCorrectInput('123')).toEqual(true);
    expect(ValidationCheck.isCorrectInput('135')).toEqual(true);
    expect(ValidationCheck.isCorrectInput('987')).toEqual(true);
    expect(ValidationCheck.isCorrectInput('1234')).toEqual(false);
    expect(ValidationCheck.isCorrectInput('012')).toEqual(false);
    expect(ValidationCheck.isCorrectInput('203')).toEqual(false);
    expect(ValidationCheck.isCorrectInput('1203')).toEqual(false);
    expect(ValidationCheck.isCorrectInput('abc')).toEqual(false);
    expect(ValidationCheck.isCorrectInput('1abc')).toEqual(false);
    expect(ValidationCheck.isCorrectInput('@#$')).toEqual(false);
  });

  const scoreTestCase = [
    ['123', '478', { ball: 0, strike: 0,}],
    ['456', '495', { ball: 1, strike: 1,}],
    ['789', '769', { ball: 0, strike: 2,}],
    ['135', '513', { ball: 3, strike: 0,}],
    ['543', '543', { ball: 0, strike: 3,}],
  ];
  test.each(scoreTestCase)(
    "calculateScore", (computerNum, userInput, answer) => {
      expect(App.calculateScore(computerNum, userInput)).toEqual(answer);
    }
  );

  test("isZeroScore", () => {
    expect(ValidationCheck.isZeroScore({ ball: 0, strike: 0,})).toEqual(true);
    expect(ValidationCheck.isZeroScore({ ball: 1, strike: 0,})).toEqual(false);
    expect(ValidationCheck.isZeroScore({ ball: 0, strike: 3,})).toEqual(false);
    expect(ValidationCheck.isZeroScore({ ball: 1, strike: 2,})).toEqual(false);
  });

  test("isThreeStrike", () => {
    expect(ValidationCheck.isThreeStrike({ ball: 0, strike: 3,})).toEqual(true);
    expect(ValidationCheck.isThreeStrike({ ball: 0, strike: 0,})).toEqual(false);
    expect(ValidationCheck.isThreeStrike({ ball: 1, strike: 2,})).toEqual(false);
  });

  test("isOneOrTwo", () => {
    expect(ValidationCheck.isOneOrTwo('1')).toEqual(true);
    expect(ValidationCheck.isOneOrTwo('2')).toEqual(true);
    expect(ValidationCheck.isOneOrTwo('3')).toEqual(false);
    expect(ValidationCheck.isOneOrTwo('12')).toEqual(false);
    expect(ValidationCheck.isOneOrTwo('abc')).toEqual(false);
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

  test("재시작/종료 입력 예외 테스트", () => {
    const randoms = [1, 3, 5];
    const answers = ["246", "135", "3", "597", "589", "2"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
