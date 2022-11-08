const { getInputValue, print } = require("../src/InputOutput");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  let mockConsole = MissionUtils.Console.readLine;
  mockConsole = jest.fn();
  mockConsole.mockImplementationOnce();
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("입출력기능 테스트", () => {
  const testCases = ["12", "2123", "입력입력"];

  test("test 1 : MissionUnit.Console로 입력한 값을 출력하는지?", () => {});

  test("substring 메서드로 특정 구간 값을 반환", () => {
    const input = "(1,2)";
    const result = input.substring(1, 4);

    expect(result).toEqual("1,2");
  });

  test("repeat 메서드로 문자열을 여러번 반복", () => {
    const input = "abc";
    const result = input.repeat(3);

    expect(result).toEqual("abcabcabc");
  });

  test("repeat 메서드에 음수 값을 넣었을 때 예외 발생", () => {
    const input = "abc";
    const result = () => input.repeat(-1);

    expect(result).toThrow(RangeError);
  });
});
