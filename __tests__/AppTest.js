const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const game = require("../src/game/game");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("야구 게임 진행 관련 함수 테스트", () => {
  test("game.Start() : 게임 시작 문구 출력 함수", () => {
    const logSpy = getLogSpy();
    const output = "숫자 야구 게임을 시작합니다.";

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(output);
  });

  test("game.pickRandomNumber() : 서로 다른 임의의 수 선택 함수 / 3자리의 수 확인", () => {
    const input = game.pickRandomNumber();

    expect(input).toHaveLength(3);
  });

  test("game.pickRandomNumber() : 서로 다른 임의의 수 선택 함수 / 1 ~ 9까지의 숫자", () => {
    const input = game
      .pickRandomNumber()
      .split("")
      .map((el) => Number(el));

    input.forEach((input) => {
      expect(input).toBeGreaterThanOrEqual(1);
      expect(input).toBeLessThanOrEqual(9);
    });
  });

  test("game.pickRandomNumber() : 서로 다른 임의의 수 선택 함수 / 중복 숫자 확인", () => {
    const input = new Set(game.pickRandomNumber().split("")).size;

    expect(input).toEqual(3);
  });
});
