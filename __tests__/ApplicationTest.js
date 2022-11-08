const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const Number = require("../src/utils/number");

const mockGenerateRandomNumber = () => {
  Number.generateRandomNumber = jest.fn().mockReturnValue("123");
  return Number.generateRandomNumber();
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

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("utils", () => {
  test("generateRandomNumber", () => {
    const randomNumber = Number.generateRandomNumber();
    randomNumber.split("").forEach((stringNumber) => {
      const number = parseInt(stringNumber);
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(9);
    });
    expect(randomNumber.length).toBe(3);
  });
});

describe("App", () => {
  test("MissionUtils 라이브러리를 사용하여 랜덤 숫자를 생성", () => {
    const randomNumber = mockGenerateRandomNumber();

    const app = new App();
    app.setRandomNumber(randomNumber);

    expect(app.randomNumber).toBe(randomNumber);
  });

  test("숫자를 입력 받아 검증하는 기능", () => {
    const answers = ["112", "1234", "", "012", "hi", "#?^"];
    answers.forEach((answer) => {
      mockQuestions([answer]);
      expect(() => {
        const app = new App();
        app.requestUserInputNumber();
      }).toThrow();
    });
  });

  test("입력 된 값을 컴퓨터가 생성한 랜덤 값과 비교하는 기능", () => {
    const randomNumber = "123";
    const userInputNumbers = ["123", "124", "456", "356"];
    const userInputResults = [
      [0, 3],
      [0, 2],
      [0, 0],
      [1, 0],
    ];

    const app = new App();
    app.setRandomNumber = jest
      .fn()
      .mockImplementation(() => (app.randomNumber = randomNumber));
    app.setRandomNumber();

    userInputNumbers.forEach((userInputNumber, index) => {
      const [ball, strike] = app.getUserInputResult(userInputNumber);
      const [resultBall, resultStrike] = userInputResults[index];
      expect(ball).toBe(resultBall);
      expect(strike).toBe(resultStrike);
    });
  });

  test("비교된 값으로 볼/스트라이크/낫싱 힌트를 준다.", () => {
    const resultHints = [
      "3스트라이크",
      "3볼",
      "2볼 1스트라이크",
      "1볼 2스트라이크",
      "낫싱",
    ];
    const userInputResults = [
      [0, 3],
      [3, 0],
      [2, 1],
      [1, 2],
      [0, 0],
    ];

    const app = new App();

    resultHints.forEach((resultHint, index) => {
      const hint = app.getHintMessage(userInputResults[index]);
      expect(resultHint).toBe(hint);
    });
  });

  test("유저 인풋 값에 따라 게임을 진행한다.", () => {
    const userInputResult = [0, 3];
    const hintMessage = "3스트라이크";
    const app = new App();
    const spyShowMessage = jest.spyOn(app, "showMessage");
    const spyGetHintMessage = jest.spyOn(app, "getHintMessage");

    app.proceedGame(userInputResult);

    expect(spyGetHintMessage).toHaveBeenCalled();
    expect(spyGetHintMessage).toHaveBeenCalledWith(userInputResult);
    expect(spyShowMessage).toHaveBeenCalled();
    expect(spyShowMessage).toHaveBeenCalledWith(hintMessage);
  });
});

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
