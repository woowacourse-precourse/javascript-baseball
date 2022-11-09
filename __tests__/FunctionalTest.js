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

  describe("input에 올바르지 않은 값 입력", () => {
    test("예외 테스트1 - 길이 3자리 이상", () => {
      const randoms = [1, 3, 5];
      const answers = ["1234"];

      mockRandoms(randoms);
      mockQuestions(answers);

      expect(() => {
        const app = new App();
        app.play();
      }).toThrow();
    });

    test("예외 테스트2 - 중복된 숫자", () => {
      const randoms = [1, 3, 5];
      const answers = ["117"];

      mockRandoms(randoms);
      mockQuestions(answers);

      expect(() => {
        const app = new App();
        app.play();
      }).toThrow();
    });

    test("예외 테스트3 - 한글", () => {
      const randoms = [1, 3, 5];
      const answers = ["ㄴㅇㄱ"];

      mockRandoms(randoms);
      mockQuestions(answers);

      expect(() => {
        const app = new App();
        app.play();
      }).toThrow();
    });

    test("예외 테스트4 - 영어소문자", () => {
      const randoms = [1, 3, 5];
      const answers = ["o12"];

      mockRandoms(randoms);
      mockQuestions(answers);

      expect(() => {
        const app = new App();
        app.play();
      }).toThrow();
    });
  });
});
