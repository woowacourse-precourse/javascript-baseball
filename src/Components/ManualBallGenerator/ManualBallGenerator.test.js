const ManualBallGenerator = require("./ManualBallGenerator");

describe("Ball", () => {
  test("execute로 숫자 생성", () => {
    const BALL_GENERATOR = new ManualBallGenerator();
    const NUMBER_ARRAY = BALL_GENERATOR.execute();

    expect(typeof NUMBER_ARRAY[0]).tobe("number");
  });
});
