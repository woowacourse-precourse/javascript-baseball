const AutomaticBallGenerator = require("./AutomaticBallGenerator");
const { mockRandoms } = require("../../mockFunction");

describe("AutomaticBallGenerator", () => {
  test("execute로 숫자를 생성", async () => {
    mockRandoms([[1, 2, 3]]);
    const BALL_GENERATOR = new AutomaticBallGenerator();
    const BALL = await BALL_GENERATOR.execute();

    expect(BALL.getNumber()).toBe(123);
  });
});
