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
  test("게임 시작 메세지 테스트", () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.play();
    expect(logSpy).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });

  test("입력값 예외 테스트 - 숫자", () => {
    const randoms = [1, 3, 5];
    const answers = ["5sd"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("숫자를 입력해주세요.");
  });

  test("입력값 유효성 검사 테스트 - 길이", () => {
    const randoms = [1, 3, 5];
    const answers = ["123456"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("3자리로 입력해주세요.");
  });

  test("입력값 유효성 검사 테스트 - 중복", () => {
    const randoms = [1, 3, 5];
    const answers = ["333"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("서로 다른 값을 입력해주세요.");
  });

  test("게임 종료 테스트", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "1", "597", "589", "2"];
    const logSpy = getLogSpy();
    const messages = [
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

  test("게임종료 입력값 유효성 검사 테스트", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "3"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow("옳바른 값을 입력해주세요.");
  });
});
