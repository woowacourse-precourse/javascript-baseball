const Game = require("../src/game");

describe("기능 목록 테스트", () => {
  test("시작 후 메세지 출력", () => {
    const log = jest.spyOn(console, "log");
    const game = new Game();
    game.init();
    expect(log).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });
});
