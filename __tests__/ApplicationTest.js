const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES, ERRORS } = require("../src/constants");

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
  test("게임 시작을 알리는 메시지를 출력해야 합니다.", () => {
    // given
    const logSpy = getLogSpy();

    // when
    const app = new App();
    app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(MESSAGES.START),
    );
  });

  test("입력이 세 자리의 수가 아니라면 예외를 발생시킨 후 게임을 종료합니다.", () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["1234", "4567", "6789"];

    // when, then
    answers.forEach((answer) => {
      mockRandoms(randoms);
      mockQuestions([answer]);

      expect(() => {
        const app = new App();
        app.play();
      }).toThrow(ERRORS.UNVALID_INPUT_LENGTH);
    });
  });

  test("입력이 서로 다른 세 자리의 수가 아니라면 예외를 발생시킨 후 게임을 종료합니다.", () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["333", "121", "288"];

    // when, then
    answers.forEach((answer) => {
      mockRandoms(randoms);
      mockQuestions([answer]);

      expect(() => {
        const app = new App();
        app.play();
      }).toThrow(ERRORS.UNVALID_INPUT_VALUE);
    });
  });

  test("입력값에 0이 포함되어 있다면 예외를 발생시킨 후 게임을 종료합니다.", () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["130", "013", "103"];

    // when, then
    answers.forEach((answer) => {
      mockRandoms(randoms);
      mockQuestions([answer]);

      expect(() => {
        const app = new App();
        app.play();
      }).toThrow(ERRORS.UNVALID_INPUT_RANGE);
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
