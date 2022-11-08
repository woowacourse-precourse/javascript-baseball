const MissionUtils = require("@woowacourse/mission-utils");
const BaseBallGame = require("../src/BaseBallGame");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("게임 플로우 테스트", () => {
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

  test("볼, 스트라이크 갯수 출력", () => {
    const game = new BaseBallGame();
    const logSpy = getLogSpy();
    game.answer = [2,5,7]
    game.output('265');

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('1볼 1스트라이크'));
  });

  test("스트라이크 갯수 출력", () => {
    const game = new BaseBallGame();
    const logSpy = getLogSpy();
    game.answer = [2,5,7]
    game.output('256');

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('2스트라이크'));
  });

  test("볼 갯수 출력", () => {
    const game = new BaseBallGame();
    const logSpy = getLogSpy();
    game.answer = [2,5,7]
    game.output('365');

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('1볼'));
  });
  
  test("낫싱 출력", () => {
    const game = new BaseBallGame();
    const logSpy = getLogSpy();
    game.answer = [2,5,7]
    game.output('368');

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('낫싱'));
  });

  test("3스트라이크 출력", () => {
    const game = new BaseBallGame();
    const logSpy = getLogSpy();
    game.answer = [2,5,7]
    game.output('257');

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('3스트라이크'));
  });
});
