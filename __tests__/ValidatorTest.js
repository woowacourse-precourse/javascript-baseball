const User = require("../src/User");

describe("User 입력값 테스트", () => {
  test("입력값이 숫자인지 확인", () => {
    const input = "abc";

    expect(() => {
      const user = new User();
      user.checkNumber(input);
    }).toThrow();
  });

  test("입력 숫자값의 범위 확인", () => {
    const input = "058";

    expect(() => {
      const user = new User();
      user.checkNumber(input);
    }).toThrow();
  });

  test("입력 숫자값의 중복 확인", () => {
    const input = "113";

    expect(() => {
      const user = new User();
      user.checkNumber(input);
    }).toThrow();
  });

  test("입력 숫자값의 길이 확인", () => {
    const user = new User();

    const input = "4123";
    const result = () => user.checkNumber(input);

    expect(result).toThrow();
  });
});
