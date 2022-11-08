const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const BaseBallGame = require("../src/BaseBallGame");
const User = require("../src/User");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

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

describe("게임 플로우", () => {
  test("랜덤 세개 숫자 출력", () => {
    const game = new BaseBallGame();
    game.getRandomNumber();
    const result = game.answer;

    expect(result).toHaveLength(3);
  });
  
  test("스트라이크 카운트 반환", () => {
    const game = new BaseBallGame();
    game.answer = [2,5,7]
    const result = game.getStrikeCount('256');

    expect(result).toBe(2);
  });
  
  test("볼 카운트 반환", () => {
    const game = new BaseBallGame();
    game.answer = [2,5,7]
    const result = game.getBallCount('562');

    expect(result).toBe(2);
  });

});
