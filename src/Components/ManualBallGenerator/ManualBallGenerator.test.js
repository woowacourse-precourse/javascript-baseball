const ManualBallGenerator = require("./ManualBallGenerator");
const { mockQuestions } = require("../../mockFunction");

describe("ManualBallGenerator", () => {
  test("입력을 받으면 콜백 함수의 매개변수로 전달", () => {
    const INPUT_NUMBER = 246;
    const STRING_ARRAY = [String(INPUT_NUMBER)];
    mockQuestions(STRING_ARRAY);

    const SPY = jest.fn();
    new ManualBallGenerator().execute(SPY);

    expect(SPY).toHaveBeenCalled();
  });

  test("숫자 앞 뒤의 공백 제거", () => {
    const INPUT_NUMBER = 246;
    const STRING_ARRAY = ["   " + String(INPUT_NUMBER) + "    "];
    mockQuestions(STRING_ARRAY);

    const SPY = jest.fn();
    new ManualBallGenerator().execute(SPY);

    expect(SPY).toHaveBeenCalled();
  });

  test("숫자가 아니면 throw로 예외 발생", () => {
    const STRING_ARRAY = ["hello"];
    mockQuestions(STRING_ARRAY);

    expect(new ManualBallGenerator().execute).toThrow();
  });

  test("3자리 숫자가 아니면 throw로 예외 발생", () => {
    const STRING_ARRAY = ["2464"];
    mockQuestions(STRING_ARRAY);

    expect(new ManualBallGenerator().execute).toThrow();
  });

  test("0을 포함하면 throw로 예외 발생", () => {
    const NUMBER_ARRAY = ["024"];
    mockQuestions(NUMBER_ARRAY);

    expect(new ManualBallGenerator().execute).toThrow();
  });

  test("숫자 사이에 공백이 있으면 throw로 예외 발생", async () => {
    const INPUT_NUMBER = 246;
    const STRING_ARRAY = ["123 " + String(INPUT_NUMBER) + " 123"];
    mockQuestions(STRING_ARRAY);

    await expect(new ManualBallGenerator().execute).toThrow();
  });
});
