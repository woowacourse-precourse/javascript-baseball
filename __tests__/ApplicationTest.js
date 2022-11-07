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

describe("야구 게임 테스트", () => {
  test("시작 메세지 출력", () => {
    const logSpy = getLogSpy();

    startGame();

    expect(logSpy).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });

  test("컴퓨터 숫자 랜덤", () => {
    const number = [1, 2, 3];

    mockRandoms(number);

    const result = selectComputer();

    expect(result).toEqual("123");
  });

  test("사용자 숫자 입력 받기", () => {
    const logSpy = getLogSpy();
    const computer = "123";
    const user = ["123"];

    mockQuestions(user);

    solveNumber(computer);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("3스트라이크"));
  });

  test("예외사항: 사용자 숫자 길이가 올바르지 않음", () => {
    const user = "1234";

    expect(() => {
      checkLength(user);
    }).toThrow();
  });

  test("예외사항: 사용자 입력 값이 숫자가 아님", () => {
    const user = "abc";

    expect(() => {
      checkNumber(user);
    }).toThrow();
  });

  test("예외사항: 0이 포함된 숫자를 입력함", () => {
    const user = "012";

    expect(() => {
      checkRange(user);
    }).toThrow();
  });

  test("예외사항: 중복된 숫자를 입력함", () => {
    const user = "224";

    expect(() => {
      checkOverlap(user);
    }).toThrow();
  });

  test("점수 카운트하기", () => {
    const computer = "589";
    const user = "597";

    const result = calculateScore(computer, user);

    expect(result).toEqual({ ball: 1, strike: 1 });
  });

  test("점수 출력", () => {
    const logSpy = getLogSpy();
    const score = { ball: 1, strike: 1 };

    printScore(score);

    expect(logSpy).toHaveBeenCalledWith("1볼 1스트라이크");
  });

  test("숫자 모두 맞음", () => {
    const logSpy = getLogSpy();
    const result = "3스트라이크";

    isAnswer(result);

    expect(logSpy).toHaveBeenCalledWith(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
  });

  test("숫자 맞지 않음", () => {
    const logSpy = getLogSpy();
    const randoms = [1, 3, 5];
    const answers = ["246", "135"];
    const messages = ["낫싱", "3스트라이크"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("게임 종료", () => {
    const logSpy = getLogSpy();
    const randoms = [1, 3, 5];
    const answers = ["246", "135", "2"];
    const messages = ["낫싱", "3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("게임 재시작", () => {
    const logSpy = getLogSpy();
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "1", "597", "589", "2"];
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

  test("예외사항: 잘못된 옵션 선택", () => {
    const option = "3";

    expect(() => {
      isOptionError(option);
    }).toThrow();
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
