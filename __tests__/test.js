const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((question, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine
  );
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임", () => {
  test("초기 멘트 test", () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.printStartNotification();

    expect(logSpy).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });

  test("랜덤 픽 test", () => {
    const randoms = [2, 4, 5];

    mockRandoms(randoms);

    const app = new App();
    app.play();

    const currentRandom = app.randomNumber.join("");

    expect(currentRandom).toBe("245");
  });

  test("사용자의 값 입력 확인", () => {
    const answers = ["245"];

    mockQuestions(answers);

    const app = new App();
    app.play();

    const currentUserInput = app.userInput.join("");

    expect(currentUserInput).toBe("245");
  });

  test("사용자 입력 값과 랜덤 생성 숫자 비교 확인", () => {
    const randoms = [1, 3, 6];
    const answers = ["789", "689", "189", "163", "136"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "1볼",
      "1스트라이크",
      "2볼 1스트라이크",
      "3스트라이크",
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

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
