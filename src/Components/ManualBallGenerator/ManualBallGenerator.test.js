const ManualBallGenerator = require("./ManualBallGenerator");
const mockFunction = require("../../mockFunction");

describe("Ball", () => {
  test("execute로 숫자 생성", async () => {
    const NUMBER_ARRAY = ["246"];
    mockFunction.mockQuestions(NUMBER_ARRAY);

    const BALL_GENERATOR = new ManualBallGenerator();
    const NUMBER = await BALL_GENERATOR.execute();

    expect(typeof NUMBER).toBe("number");
  });

  test("숫자가 아니면 throw로 예외 발생", async () => {
    const STRING_ARRAY = ["hello"];
    mockFunction.mockQuestions(STRING_ARRAY);

    const BALL_GENERATOR = new ManualBallGenerator();
    await expect(BALL_GENERATOR.execute()).rejects.toThrow();
  });

  test("3자리 숫자가 아니면 throw로 예외 발생", async () => {
    const STRING_ARRAY = ["2464"];
    mockFunction.mockQuestions(STRING_ARRAY);

    const BALL_GENERATOR = new ManualBallGenerator();
    await expect(BALL_GENERATOR.execute()).rejects.toThrow();
  });

  test("0을 포함하면 throw로 예외 발생", async () => {
    const NUMBER_ARRAY = ["024"];
    mockFunction.mockQuestions(NUMBER_ARRAY);

    const BALL_GENERATOR = new ManualBallGenerator();
    await expect(BALL_GENERATOR.execute()).rejects.toThrow();
  });
});
