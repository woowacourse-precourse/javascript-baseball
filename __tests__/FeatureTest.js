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
  test("첫 게임에만 시작 메세지 출력", () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.play();
    expect(logSpy).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });

  test("문자열 입력했을 때 예외처리", () => {
    const randoms = [1, 3, 5];
    const answers = ["5sd"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("숫자를 입력해주세요.");
  });

  test("숫자 '0'입력했을 떄 예외처리", () => {
    const randoms = [1, 3, 5];
    const answers = ["0"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("숫자를 입력해주세요.");
  });

  test("길이가 3이 아닐 떄 예외처리", () => {
    const randoms = [1, 3, 5];
    const answers = ["123456"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("3자리로 입력해주세요.");
  });

  test("중복값이 있을 때 예외처리", () => {
    const randoms = [1, 3, 5];
    const answers = ["333"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("서로 다른 값을 입력해주세요.");
  });

  test.each([
    [[1, 2, 3], [1, 2, 3], 0],
    [[1, 2, 3], [1, 4, 2], 1],
    [[1, 2, 3], [1, 3, 2], 2],
    [[1, 2, 3], [3, 1, 2], 3],
  ])("ball카운터(%s, %s) return %s ", (user, computer, expected) => {
    const app = new App();
    expect(app.countBall(user, computer)).toEqual(expected);
  });

  test.each([
    [[1, 2, 3], [4, 5, 6], 0],
    [[1, 2, 3], [1, 5, 6], 1],
    [[1, 2, 3], [4, 2, 3], 2],
    [[1, 2, 3], [1, 2, 3], 3],
  ])("strike카운터(%s, %s) return %s ", (user, computer, expected) => {
    const app = new App();
    expect(app.countStrike(user, computer)).toEqual(expected);
  });

  test("1에서 9까지 서로 다른 임의의 수 3개를 생성", () => {
    const randoms = [3, 3, 6, 6, 9, 9];
    mockRandoms(randoms);

    const app = new App();
    const randomNumbers = app.createComputerNumber();
    const randomNumbersSet = new Set(randomNumbers);

    expect(Array.isArray(randomNumbers)).toEqual(true);
    expect(randomNumbers.length).toEqual(3);
    expect(randomNumbers.length === randomNumbersSet.size).toEqual(true);
    expect(randomNumbers).toEqual([3, 6, 9]);
  });

  test("게임 종료 확인", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "1", "597", "589", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "숫자 야구 게임을 시작합니다.",
      "낫싱",
      "3스트라이크",
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
      "1볼 1스트라이크",
      "3스트라이크",
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
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

  test("1 또는 2 외의 문자열 입력 시 예외처리", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["135", "3"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("옳바른 값을 입력해주세요.");
  });
});
