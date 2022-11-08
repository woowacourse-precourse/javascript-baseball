const { validateThreeFigures, validateNextAction } = require("../src/modules/validation");

describe("(임의의 세자리 숫자) 유저 입력값 유효성 검사", () => {
  test("세자리 아닌 경우 검사", () => {
    const input = "1234";
    const result = validateThreeFigures(input);

    expect(result).toEqual(false);
  });

  test("중복 숫자가 있는 경우 검사", () => {
    const input = "113";
    const result = validateThreeFigures(input);

    expect(result).toEqual(false);
  });

  test("숫자가 아닌 문자열이 있는 경우 검사", () => {
    const input = "1as";
    const result = validateThreeFigures(input);

    expect(result).toEqual(false);
  });

  test("입력 안하는 경우", () => {
    const input = "";
    const result = validateNextAction(input);

    expect(result).toEqual(false);
  });

  test("제대로 된 경우 검사", () => {
    const input = "123";
    const result = validateThreeFigures(input);

    expect(result).toEqual(true);
  });
});

describe("(게임 종료 시) 유저 입력 값 유효성 검사", () => {
  test("입력 안하는 경우", () => {
    const input = "";
    const result = validateNextAction(input);

    expect(result).toEqual(false);
  });

  test("1, 2 이외의 값을 입력하는 경우", () => {
    const input1 = "3";
    const input2 = "a";
    const result1 = validateNextAction(input1);
    const result2 = validateNextAction(input2);

    expect(result1).toEqual(false);
    expect(result2).toEqual(false);
  });

  test("제대로 된 값을 입력하는 경우", () => {
    const input = "1";
    const result = validateNextAction(input);

    expect(result).toEqual(true);
  });
});