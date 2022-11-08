describe("문자열 테스트", () => {
  test("split 메서드로 주어진 값을 구분", () => {
    const input = "1,2";
    const result = input.split(",");

    expect(result).toContain("2", "1");
    expect(result).toContainEqual("1", "2");
  });

  test("split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환", () => {
    const input = "1";
    const result = input.split(",");

    expect(result).toContain("1");
  });

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
