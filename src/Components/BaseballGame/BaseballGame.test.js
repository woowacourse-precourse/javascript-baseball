const BaseballGame = require("./BaseballGame");

describe("BaseballGame", () => {
  test("addPlayer 메서드를 가진다.", () => {
    const baseballGame = new BaseballGame();

    expect(baseballGame).toHaveProperty("addPlayer");
  });
});
