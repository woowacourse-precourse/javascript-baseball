const startGameAndMakeRandomNumber = require("../src/features/startGameAndMakeRandomNumber");

describe("게임 동작 기능 테스트", () => {
  test("게임 시작 기능 테스트", () => {
    expect(startGameAndMakeRandomNumber()).toBeGreaterThan(100);
    expect(startGameAndMakeRandomNumber()).toBeLessThan(1000);
  });
});
