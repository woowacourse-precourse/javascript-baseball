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

describe("게임 시작 알려주기", () => {
  test("console로 게임시작이 출력됨", () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.printGameStart();

    expect(logSpy).toHaveBeenCalled();
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
  // 예외처리 테스트
  test("같은 숫자를 2개이상 가지고 있을경우", () => {
    const randoms = [1, 4, 5];
    const answers = ["554"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("3자리가 아닌 경우", () => {
    const randoms = [3, 5, 7];
    const answers = ["1234567"];

    mockRandoms(randoms);
    mockQuestions(answers);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  test("알파벳과 숫자가 섞여있는 경우", () => {
    const randoms = [1, 4, 8];
    const answers = ["2butterfly7"];

    mockRandoms(randoms);
    mockQuestions(answers);
    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
  test("0이 들어있을 경우", () => {
    const randoms = [0, 4, 9];
    const answers = ["490", "900"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
