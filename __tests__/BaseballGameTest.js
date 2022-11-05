const App = require("../src/App");

describe("숫자 야구 게임", () => {
  test("주어진 메시지 출력", () => {
    const message = "test message";
    const logSpy = jest.spyOn(console, "log");

    const app = new App();
    app.print(message);

    expect(logSpy).toHaveBeenCalledWith(message);
  });

  test("질문 출력, 입력값 받기", () => {
    const message = "input number: ";
    const answers = ["246", "135"];
    const logSpy = jest.spyOn(console, "log");

    const app = new App();
    app.readLine = jest.fn();

    answers.forEach(async (answer) => {
      const input = await app.readLine.mockImplementationOnce(message);
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
      expect(input).toBe(answer);
    });
  });

  test("서로 다른 세 자리 수를 랜덤으로 생성", () => {
    const DIGITS = 3;
    const set = new Set();

    const app = new App();
    const randomNumber = app.generateRandomNumber(DIGITS);

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

    const app = new App();
    const result1 = app.isEqual(char1, char2),
      result2 = app.isEqual(char1, num1),
      result3 = app.isEqual(num1, num2);

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
      const app = new App();
      app.throwException(MESSAGE);
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
});
