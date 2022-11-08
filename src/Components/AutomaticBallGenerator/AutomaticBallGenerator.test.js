const AutomaticBallGenerator = require("./AutomaticBallGenerator");

describe("Ball", () => {
  test("execute로 숫자를 생성", () => {
    const BALL_GENERATOR = new AutomaticBallGenerator();
    const NUMBER = BALL_GENERATOR.execute();

    expect(typeof NUMBER).toBe("number");
  });
});
