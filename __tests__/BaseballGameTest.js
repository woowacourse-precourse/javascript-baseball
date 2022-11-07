const { Console } = require("@woowacourse/mission-utils");
const BaseballGame = require("../src/baseball/BaseballGame");

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 유닛 테스트", () => {
  test("객체 생성 시 초기화 작동 확인", () => {
    const baseballGame = new BaseballGame();

    baseballGame.init(true);

    expect(baseballGame.isFirstGame).toEqual(true);
    expect(Array.isArray(baseballGame.pickedNumberByComputer)).toEqual(true);
    expect(baseballGame.pickedNumberByComputer.length).toEqual(3);
  });

  test("첫번째 판에만 게임 시작 문구 출력", () => {
    const logSpy = getLogSpy();
    const baseballGame = new BaseballGame();
    Console.readLine = jest.fn();

    baseballGame.playGame();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("숫자 야구 게임을 시작합니다."));
  });

  test("init(false) 후 playGame 호출 시 미출력", () => {
    const logSpy = getLogSpy();
    const baseballGame = new BaseballGame();
    baseballGame.init(false);
    Console.readLine = jest.fn();

    baseballGame.playGame();

    expect(logSpy).toHaveBeenCalledTimes(0);
  });

  test("스트라이크 개수에 따른 문구 출력", () => {
    const baseballGame = new BaseballGame();
    const logSpy = jest.spyOn(Console, "readLine");
    baseballGame.countStrikeBallNothing = jest.fn();
    baseballGame.countStrikeBallNothing.mockReturnValue([3, 0, 0]);

    baseballGame.playTurn("123");

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."),
      baseballGame.inputRestartOrEnd
    );
  });

  test("스트라이크, 볼, 낫싱 개수", () => {
    const baseballGame = new BaseballGame();
    const result = baseballGame.countStrikeBallNothing("123", [1, 2, 4]);

    expect(result).toEqual([2, 0, 1]);
  });

  test("입력한 수에 대한 결과 출력", () => {
    const baseballGame = new BaseballGame();
    const logSpy = getLogSpy();

    baseballGame.printResultsForCount(3, 0, 0);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("3스트라이크"));
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
    );
  });

  test("1 또는 2가 아닌 값 입력 시 throw", () => {
    const baseballGame = new BaseballGame();
    const input = "*";

    expect(() => {
      baseballGame.inputRestartOrEnd(input);
    }).toThrow();
  });

  test("1 입력시 확인", () => {
    const baseballGame = new BaseballGame();
    baseballGame.init = jest.fn();
    baseballGame.playGame = jest.fn();
    const initSpy = jest.spyOn(baseballGame, "init");
    const playGameSpy = jest.spyOn(baseballGame, "playGame");

    baseballGame.inputRestartOrEnd("1");

    expect(initSpy).toHaveBeenCalledTimes(1);
    expect(playGameSpy).toHaveBeenCalledTimes(1);
  });

  test("2 입력시 게임 종료", () => {
    const baseballGame = new BaseballGame();
    const logSpy = getLogSpy();

    baseballGame.inputRestartOrEnd("2");

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("게임 종료"));
  });
});

afterAll(() => {
  Console.close();
});
