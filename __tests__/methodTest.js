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

describe("입력값 테스트", () => {
  const testCode = new App();

  test("checkInputNum 메서드 두자리 에러 검사", () => {
    expect(() => testCode.checkInputNum("12", true)).toThrow(
      "세자리 수를 입력해야합니다. 프로그램을 종료합니다."
    );
  });

  test("checkInputNum 메서드 중복값 에러 검사", () => {
    expect(() => testCode.checkInputNum("334", true)).toThrow(
      "서로 다른 숫자 세가지를 입력해야합니다. 프로그램을 종료합니다."
    );
  });

  test("checkInputNum 예외처리 테스트", () => {
    const randoms = [3, 4, 7];
    const answers = ["123", "357", "5"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("세자리 수를 입력해야합니다. 프로그램을 종료합니다.");
  });

  test("restartQuestion 메서드 수행과정 확인 ", () => {
    const randoms = [1, 2, 5, 3, 9, 7];
    const answers = ["346", "651", "126", "125", "1", "312", "246", "397", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "2볼",
      "2스트라이크",
      "3스트라이크",
      "1스트라이크",
      "낫싱",
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

  test("getCnt 예외처리 테스트", () => {
    const randoms = [3, 6, 8];
    const answers = ["a12"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("1 ~ 9 숫자만 입력해야합니다. 프로그램을 종료합니다.");
  });

  test("ERROR.LENGTH 예외처리 테스트", () => {
    const randoms = [3, 6, 8];
    const answers = [""];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("세자리 수를 입력해야합니다. 프로그램을 종료합니다.");
  });

  test("ERROR.DUPLICATION 예외처리 테스트", () => {
    const randoms = [3, 6, 8];
    const answers = ["045"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("1 ~ 9 숫자만 입력해야합니다. 프로그램을 종료합니다.");
  });

  test("게임 종료 테스트", () => {
    const randoms = [7, 5, 4];
    const answers = ["346", "654", "754", "2"];
    const logSpy = getLogSpy();
    const messages = ["1볼", "2스트라이크", "3스트라이크", "게임 종료"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
