const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const {
  print,
  isEqual,
  throwException,
  generateRandomNumber,
} = require("../src/Util");

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLine = jest.fn();
  inputs.reduce((acc, input) => {
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
  test("주어진 메시지 출력", () => {
    const message = "test message";
    const logSpy = jest.spyOn(console, "log");

    print(message);

    expect(logSpy).toHaveBeenCalledWith(message);
  });

  test("서로 다른 세 자리 수를 랜덤으로 생성", () => {
    const DIGITS = 3;
    const set = new Set();
    const randomNumber = generateRandomNumber(DIGITS);

    randomNumber.forEach((num) => {
      expect(num.toString()).toMatch(/[1-9]/);
      set.add(num);
    });

    expect(set.size).toBe(DIGITS);
  });

  test("두 인자가 같은지 확인", () => {
    const char1 = "1",
      char2 = "1",
      num1 = 1,
      num2 = 2;

    const result1 = isEqual(char1, char2),
      result2 = isEqual(char1, num1),
      result3 = isEqual(num1, num2);

    expect(result1).toBe(true);
    expect(result2).toBe(false);
    expect(result3).toBe(false);
  });

  test("유효한 숫자인지 확인", () => {
    const inputs = ["123", "111", "120", "12", "1234", "."];
    const expectedResults = [true, false, false, false, false, false];
    const DIGITS = 3;
    const app = new App();
    const results = inputs.reduce((results, input) => {
      const result = app.isValidNumber(input, DIGITS);
      results.push(result);
      return results;
    }, []);

    results.forEach((result, index) => {
      expect(result).toBe(expectedResults[index]);
    });
  });

  test("유효한 커맨드인지 확인", () => {
    const inputs = ["1", "2", "3", "."];
    const expectedResults = [true, true, false, false];
    const app = new App();

    inputs.forEach((input, index) => {
      result = app.isValidCommand(input);
      expect(result).toBe(expectedResults[index]);
    });
  });

  test("예외 테스트", () => {
    const MESSAGE = "Error Test";
    expect(() => {
      throwException(MESSAGE);
    }).toThrow();
  });

  test("야구 카운트 계산", () => {
    const answer = [3, 4, 5];
    const userNumbers = ["123", "235", "345"];
    const expectedResults = [
      [1, 0],
      [1, 1],
      [0, 3],
    ];

    const app = new App();
    userNumbers.forEach((num, index) => {
      const result = JSON.stringify(app.checkBaseballCount(answer, num));
      const expectedResult = JSON.stringify(expectedResults[index]);
      expect(result).toBe(expectedResult);
    });
  });

  test("결과 구하기", () => {
    const counts = [
      [0, 0],
      [0, 3],
      [1, 1],
      [3, 0],
    ];
    const messages = ["낫싱", "3스트라이크", "1볼 1스트라이크", "3볼"];
    const app = new App();

    counts.forEach((count, index) => {
      const result = app.getResult(count).trim();
      expect(result).toBe(messages[index]);
    });
  });

  test("결과 출력", () => {
    const logSpy = jest.spyOn(console, "log");
    const counts = [
      [0, 0],
      [0, 3],
      [1, 1],
      [3, 0],
    ];
    const messages = ["낫싱", "3스트라이크", "1볼 1스트라이크", "3볼"];
    const app = new App();

    messages.forEach((output, index) => {
      app.printResult(counts[index]);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("정답 체크", () => {
    const DIGITS = 3;
    const expectedResults = [false, false, false, true];
    const app = new App();
    expectedResults.forEach((expectedResult, index) => {
      const result = app.isCorrectAnswer((strikeCounts = index), DIGITS);
      expect(result).toBe(expectedResult);
    });
  });

  test("정답을 맞출 때까지 라운드 반복", () => {
    const DIGITS = 3;
    const randoms = [1, 3, 5];
    const inputs = ["246", "135"];
    const logSpy = getLogSpy();
    const messages = ["낫싱", "3스트라이크"];

    mockRandoms(randoms);
    mockQuestions(inputs);

    const app = new App();
    const answer = generateRandomNumber(DIGITS);
    app.playRound(answer);

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("커맨드를 입력 받아 1이면 재시작", () => {
    const randoms = [1, 3, 5];
    const inputs = ["1", "246", "135"];
    const logSpy = getLogSpy();
    const messages = ["낫싱", "3스트라이크"];

    mockRandoms(randoms);
    mockQuestions(inputs);

    const app = new App();
    app.selectRestartOrExit();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

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
    app.initGame();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
