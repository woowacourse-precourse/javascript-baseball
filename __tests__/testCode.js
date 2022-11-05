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
  test("세번째 입력값 예외처리 테스트", () => {
    const randoms = [3, 4, 7];
    const answers = ["123", "357", "5"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("잘못된 문자를 입력하였습니다. 프로그램을 종료합니다.");
  });

  test("게임 종료 후 재시작", () => {
    const randoms = [1, 2, 5, 3, 9, 7];
    const answers = ["346", "651", "126", "125", "1", "312", "246", "397", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "1스트라이크",
      "2볼",
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

  test("게임 종료 후 예외처리 테스트", () => {
    const randoms = [2, 4, 5];
    const answers = ["123", "245", "5"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("잘못된 문자를 입력하였습니다. 프로그램을 종료합니다.");
  });

  test("공백 입력 예외처리 테스트", () => {
    const randoms = [3, 6, 8];
    const answers = [""];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("잘못된 문자를 입력하였습니다. 프로그램을 종료합니다.");
  });

  test("숫자 이외 입력 예외처리 테스트", () => {
    const randoms = [3, 6, 8];
    const answers = ["a12"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("잘못된 문자를 입력하였습니다. 프로그램을 종료합니다.");
  });

  test("0 입력 예외처리 테스트", () => {
    const randoms = [3, 6, 8];
    const answers = ["045"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("잘못된 문자를 입력하였습니다. 프로그램을 종료합니다.");
  });
});
