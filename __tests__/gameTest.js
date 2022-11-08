const { RANDOM_NUMBER } = require("../src/constants");
const Game = require("../src/game");

describe("기능 목록 테스트", () => {
  test("시작 후 메세지 출력", () => {
    const log = jest.spyOn(console, "log");
    const game = new Game();
    game.init();
    expect(log).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });
  test("서로 다른 세자리 수 생성 및 1 ~ 9 숫자 확인", () => {
    const game = new Game();
    const randomNumber = game.createRandomNumber();
    expect(randomNumber.length).toEqual(3);
    randomNumber.forEach((number) => {
      expect(RANDOM_NUMBER.RANGE.test(number)).toBe(true);
    });
  });
});
