const AutomaticBallGenerator = require("./AutomaticBallGenerator");

describe("AutomaticBallGenerator", () => {
  test("execute로 숫자를 생성", () => {
    const BALL_GENERATOR = new AutomaticBallGenerator();
    const BALL = BALL_GENERATOR.execute();

    expect(typeof BALL.getNumber()).toBe("number");
  });
});
