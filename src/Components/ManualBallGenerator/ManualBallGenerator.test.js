const ManualBallGenerator = require("./ManualBallGenerator");

describe("Ball", () => {
  test("execute로 3개의 숫자를 생성", () => {
    const BALL_GENERATOR = new ManualBallGenerator();
    const NUMBER_ARRAY = BALL_GENERATOR.execute();

    expect(NUMBER_ARRAY).toHaveLength(3);
  });
});
