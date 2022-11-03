const Player = require("./Player");

describe("Player", () => {
  test("enter 메서드를 가진다.", () => {
    const player = new Player();

    expect(player).toHaveProperty("enter");
  });
});
