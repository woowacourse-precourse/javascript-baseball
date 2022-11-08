const { checkOneOrTwo, checkThreeDifferentNumbers } = require("../src/Error");

describe("checkThreeDifferentNumbers 함수 테스트 ", () => {
  test("정상적인 입력이 들어오는 경우", () => {
    const input = "123";
    expect(checkThreeDifferentNumbers(input)).toEqual(true);
  });
  test("3자리 미만인 수가 들어오는 경우", () => {
    const input = "12";
    expect(() => {
      checkThreeDifferentNumbers(input);
    }).toThrow(
      new Error("1에서 9 사이의 서로 다른 숫자 3개를 입력해야 합니다")
    );
  });

  test("3자리 이상인 수가 들어오는 경우", () => {
    const input = "1234";
    expect(() => {
      checkThreeDifferentNumbers(input);
    }).toThrow(
      new Error("1에서 9 사이의 서로 다른 숫자 3개를 입력해야 합니다")
    );
  });

  test("중복되는 숫자가 들어오는 경우", () => {
    const input = "113";
    expect(() => {
      checkThreeDifferentNumbers(input);
    }).toThrow(
      new Error("1에서 9 사이의 서로 다른 숫자 3개를 입력해야 합니다")
    );
  });

  test("1부터9사이의 값이 아닌 숫자가 들어오는 경우", () => {
    const input = "001";
    expect(() => {
      checkThreeDifferentNumbers(input);
    }).toThrow(
      new Error("1에서 9 사이의 서로 다른 숫자 3개를 입력해야 합니다")
    );
  });

  test("숫자가 아닌 다른 문자가 들어오는 경우", () => {
    const input = "aㅁ_";
    expect(() => {
      checkThreeDifferentNumbers(input);
    }).toThrow(
      new Error("1에서 9 사이의 서로 다른 숫자 3개를 입력해야 합니다")
    );
  });
});

describe("checkOneOrTwo 함수 테스트", () => {
  test("1이 입력되는 경우", () => {
    const input = "1";
    expect(checkOneOrTwo(input)).toEqual(true);
  });

  test("2가 입력되는 경우", () => {
    const input = "2";
    expect(checkOneOrTwo(input)).toEqual(true);
  });

  test("1,2 이외의 값이 입력되는 경우", () => {
    const input = "asdfe13d93";
    expect(() => {
      checkOneOrTwo(input);
    }).toThrow(new Error("1 또는 2 만 입력해야합니다"));
  });
});
