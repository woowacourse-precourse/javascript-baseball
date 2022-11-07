const MissionUtils = require("@woowacourse/mission-utils");

const App = require("../src/App");
const Console = require("../src/Console");
const Input = require("../src/Input");

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

  test("calculateCount", () => {
    const app = new App();
    app.answer = [1, 2, 3];

    expect(app.calculateCount("123")).toBe("3스트라이크");
    expect(app.calculateCount("456")).toBe("낫싱");
    expect(app.calculateCount("312")).toBe("3볼");
    expect(app.calculateCount("132")).toBe("2볼 1스트라이크");
  });
});

describe("Input", () => {
  test("isValidGuess는 적절한 입력에 대하여 true를 반환한다.", () => {
    const inputs = ["123", "789", "987", "135"];
    inputs.forEach((input) => {
      expect(Input.isValidGuess(input)).toBe(true);
    });
  });

  test("isValidGuess는 적절하지 않은 입력에 대하여 에러를 발생시켜야한다.", () => {
    const inputs = ["abc", "1234", "ab2", "12", "12345", "333", "112"];

    inputs.forEach((input) => {
      expect(() => Input.isValidGuess(input)).toThrow(Error);
    });
  });

  test("checkNumber", () => {
    const number = 1;
    const notNumber = "a";

    expect(Input.checkNumber(number)).toBe(true);
    expect(() => Input.checkNumber(notNumber)).toThrow(Error);
  });

  test("checkZero", () => {
    const zero = 0;
    const notZero = 1;

    expect(() => Input.checkZero(zero)).toThrow(Error);
    expect(Input.checkZero(notZero)).toBe(true);
  });

  test("checkIsOneOrTwo", () => {
    const one = "1";
    const two = "2";
    const notOneOrTwo = "3";

    expect(Input.checkIsOneOrTwo(one)).toBe(true);
    expect(Input.checkIsOneOrTwo(two)).toBe(true);
    expect(() => Input.checkIsOneOrTwo(notOneOrTwo)).toThrow(Error);
  });
});

describe("Console", () => {
  test("readLine", () => {
    const readLineSpy = jest.spyOn(MissionUtils.Console, "readLine");
    const callback = jest.fn();

    Console.readLine("question", callback);

    expect(readLineSpy).toHaveBeenCalledWith("question", callback);
  });

  test("print", () => {
    const printSpy = jest.spyOn(MissionUtils.Console, "print");

    Console.print("message");

    expect(printSpy).toHaveBeenCalledWith("message");
  });

  test("close", () => {
    const closeSpy = jest.spyOn(MissionUtils.Console, "close");

    Console.close();

    expect(closeSpy).toHaveBeenCalled();
  });
});
