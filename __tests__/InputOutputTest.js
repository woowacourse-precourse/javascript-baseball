const MissionUtils = require("@woowacourse/mission-utils");
const { getInputValue, print } = require("../src/InputOutput");

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};
describe("문자열 테스트", () => {
  const logSpy = getLogSpy();
  test("question으로 보내는 String 값이 없으면 에러를 내보내는지?", async () => {
    await expect(getInputValue()).rejects.toThrow();
  });
  test("값 입력 시 입력한 값이 없으면 에러를 내보내는지?", async () => {});

  test("파라미터로전달된 스트링값을 그대로 출력하는지?", () => {
    const messages = ["입력", "테스트", "입니다", "잘하나요?", "12345"];
    messages.forEach((message) => print(message));
    messages.forEach((message) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
    });
  });
  test("파라미터로 전달된 numberCheckResult 객체를 잘 표현하는지?", () => {
    const input = [
      { ball: 1, strike: 2, nothing: false },
      { ball: 0, strike: 1, nothing: false },
      { ball: 1, strike: 0, nothing: false },
      { ball: 0, strike: 0, nothing: true },
    ];
    const answers = ["1볼 2스트라이크", "1스트라이크", "1볼", "낫싱"];
    input.forEach((input) => print(input));
    answers.forEach((answer) =>
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(answer))
    );
  });
  test("string 또는 numberCheckResult 객체가 아니면 에러를 내보내는지?", () => {
    expect(() => print(["1"])).toThrow();
    expect(() => print(1)).toThrow();
    expect(() => print(false)).toThrow();
  });
});
