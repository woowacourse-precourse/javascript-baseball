const AutomaticBallGenerator = require("./AutomaticBallGenerator");

describe("AutomaticBallGenerator", () => {
  test("execute로 숫자를 생성", async () => {
    const BALL_GENERATOR = new AutomaticBallGenerator();
    const BALL = await BALL_GENERATOR.execute();

    expect(typeof BALL.getNumber()).toBe("number");
  });
});
