const getUserExecption = require("../src/utils/getUserExecption");

describe("입력 예외처리 테스트", () => {
  test("입력 잘 된 경우1", () => {
    expect(getUserExecption(123)).toEqual([1, 2, 3]);
  });
  test("입력 잘 된 경우2", () => {
    expect(getUserExecption(169)).toEqual([1, 6, 9]);
  });
  test("3글자 이상 입력", () => {
    expect(() => {
      getUserExecption(1234);
    }).toThrow();
  });
  test("중복된 수 입력", () => {
    expect(() => {
      getUserExecption(144);
    }).toThrow();
  });
  test("범위 밖의 수 입력", () => {
    expect(() => {
      getUserExecption(107);
    }).toThrow();
  });
});
