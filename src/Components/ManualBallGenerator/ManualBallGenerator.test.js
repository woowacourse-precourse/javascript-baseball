const ManualBallGenerator = require("./ManualBallGenerator");
const mockFunction = require("../../mockFunction");

describe("ManualBallGenerator", () => {
  test("execute로 숫자 생성", async () => {
    const INPUT_NUMBER = 246;
    const STRING_ARRAY = [String(INPUT_NUMBER)];
    mockFunction.mockQuestions(STRING_ARRAY);
    const NUMBER_ARRAY = await new ManualBallGenerator().execute();

    expect(NUMBER_ARRAY).toEqual([2, 4, 6]);
  });

  test("숫자가 아니면 throw로 예외 발생", async () => {
    const STRING_ARRAY = ["hello"];
    mockFunction.mockQuestions(STRING_ARRAY);

    await expect(new ManualBallGenerator().execute()).rejects.toThrow();
  });

  test("3자리 숫자가 아니면 throw로 예외 발생", async () => {
    const STRING_ARRAY = ["2464"];
    mockFunction.mockQuestions(STRING_ARRAY);

    await expect(new ManualBallGenerator().execute()).rejects.toThrow();
  });

  test("0을 포함하면 throw로 예외 발생", async () => {
    const NUMBER_ARRAY = ["024"];
    mockFunction.mockQuestions(NUMBER_ARRAY);

    await expect(new ManualBallGenerator().execute()).rejects.toThrow();
  });

  test("숫자 앞 뒤의 공백 제거", async () => {
    const INPUT_NUMBER = 246;
    const STRING_ARRAY = ["   " + String(INPUT_NUMBER) + "    "];
    mockFunction.mockQuestions(STRING_ARRAY);
    const NUMBER = await new ManualBallGenerator().execute();

    expect(NUMBER).toEqual([2, 4, 6]);
  });

  test("숫자 사이에 공백이 있으면 throw로 예외 발생", async () => {
    const INPUT_NUMBER = 246;
    const STRING_ARRAY = ["123 " + String(INPUT_NUMBER) + " 123"];
    mockFunction.mockQuestions(STRING_ARRAY);

    await expect(new ManualBallGenerator().execute()).rejects.toThrow();
  });
});
