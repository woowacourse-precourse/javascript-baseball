const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const { isValidBallNumber } = require("../src/game/validation");
const { makeBallStrikeText } = require("../src/game/ball");

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
  // 원본
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

  test("볼볼볼", () => {
    const randoms = [1, 2, 3];
    const answers = ["981", "281", "231", "123", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "1볼",
      "2볼",
      "3볼",
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

  test("스트라이크", () => {
    const randoms = [1, 2, 3];
    const answers = ["145", "125", "123", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "1스트라이크",
      "2스트라이크",
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

  test("혼합", () => {
    const randoms = [1, 2, 3];
    const answers = ["142", "321", "123", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "1볼 1스트라이크",
      "2볼 1스트라이크",
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

  // 원본
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


  test("예외 테스트 : 사용자가 입력한 숫자가 서로다른 숫자가 아닐 때", () => {
    const randoms = [1, 3, 5];
    const answers = ["133"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트 : 공을 맞추라는 상황에서 3자리 미만의 숫자를 입력", () => {
    const randoms = [1, 3, 5];
    const answers = ["1"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("예외 테스트 : 게임 재시작을 묻는 경우 1,2가 아닌 숫자를 입력할 때", () => {
    const randoms = [1, 3, 5];
    const answers = ["135", "3"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("입력 함수 검증 (isValidBallNumber) : 1", () => {
    const input = "1";
    const result = isValidBallNumber(input);
    expect(result).toBeFalsy();
  });

  test("입력 함수 검증 (isValidBallNumber) : 123", () => {
    const input = "123";
    const result = isValidBallNumber(input);
    expect(result).toBeTruthy();
  });

  test("입력 함수 검증 (isValidBallNumber) : 122", () => {
    const input = "122";
    const result = isValidBallNumber(input);
    expect(result).toBeFalsy();
  });

  test("입력 함수 검증 (isValidBallNumber) : 122", () => {
    const ball = "1";
    const strike = "2";
    const result = makeBallStrikeText(ball, strike);
    expect(result).toBe("1볼 2스트라이크");
  });

  test("입력 함수 검증 (makeBallStrikeText) : 1,2", () => {
    const ball = 1;
    const strike = 2;
    const result = makeBallStrikeText(ball, strike);
    expect(result).toBe("1볼 2스트라이크");
  });

  test("입력 함수 검증 (makeBallStrikeText) : 0,2", () => {
    const ball = 0;
    const strike = 2;
    const result = makeBallStrikeText(ball, strike);
    expect(result).toBe("2스트라이크");
  });

  test("입력 함수 검증 (makeBallStrikeText) : 1,0", () => {
    const ball = 1;
    const strike = 0;
    const result = makeBallStrikeText(ball, strike);
    expect(result).toBe("1볼");
  });

  test("입력 함수 검증 (makeBallStrikeText) : 0,0", () => {
    const ball = 0;
    const strike = 0;
    const result = makeBallStrikeText(ball, strike);
    expect(result).toBe("낫싱");
  });

});
