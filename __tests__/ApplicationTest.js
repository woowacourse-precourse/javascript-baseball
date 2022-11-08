const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const { getRandomNumber } = require("../src/utils/getRandomNumber");
const { checkInput } = require("../src/utils/checkInput");

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

  test("strike & ball 수 구하기", () => {
    const app = new App();
    const input = [1, 2, 3];
    const answers = ["134", "245", "769", "123", "127"];
    const result = {
      strike: [1, 0, 0, 3, 2],
      ball: [1, 1, 0, 0, 0],
    };

    answers.forEach((answer, index) => {
      const { strike, ball } = app.getStrikeAndBallNumber(input, answer);
      expect(strike).toBe(result.strike[index]);
      expect(ball).toBe(result.ball[index]);
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
