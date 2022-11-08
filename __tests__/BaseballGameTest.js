const MissionUtils = require("@woowacourse/mission-utils");
const BaseballGame = require("../src/BaseballGame");
const Exception = require("../src/Exception");
const { EXCEPTION } = require("../src/static/constants");

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
    const randoms = [1, 2, 3, 4, 5, 6];
    const answers = ["123", "1", "123", "456", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "3스트라이크",
      "낫싱",
      "3스트라이크",
      "게임 종료",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const baseballGame = new BaseballGame();
    baseballGame.start();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test("입력이 세 자리 수가 아닌 경우", () => {
    const randoms = [1, 2, 3];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const baseballGame = new BaseballGame();
      baseballGame.start();
    }).toThrow(EXCEPTION.invalidLength);
  });
  test("게임 종료 후 다시시작 또는 완전히 종료 번호가 아닌 경우", () => {
    const randoms = [1, 2, 3];
    const answers = ["123", "3"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const baseballGame = new BaseballGame();
      baseballGame.start();
    }).toThrow(EXCEPTION.invalidInput);
  });
  test("다시시작 또는 완전히 종료 번호가 아닌 경우", () => {
    const input = "3";
    const result = () => BaseballGame.validateStartRules(input);

    expect(result).toThrow(Exception);
    expect(result).toThrow(EXCEPTION.invalidInput);
  });
});
