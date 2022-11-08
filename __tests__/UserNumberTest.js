const User = require("../src/User");

describe("사용자 입력값 유효성 검사 테스트", () => {
  test(`사용자가 0을 포함할 경우 예외발생`, () => {
    const user = new User();
    const input = "078";
    const result = () => user.isValidUser(input);

    expect(result).toThrow();
  });

  test(`사용자가 3개 숫자를 입력하지 않은 경우 예외발생`, () => {
    const user = new User();
    const input = "0789";
    const result = () => user.isValidUser(input);

    expect(result).toThrow();
  });

  test(`사용자가 중복되는 숫자를 입력할 경우 예외발생`, () => {
    const user = new User();
    const input = "778";
    const result = () => user.isValidUser(input);

    expect(result).toThrow();
  });

  test(`사용자가 숫자가 아닌 값을 입력할 경우 예외발생`, () => {
    const user = new User();
    const input = "tw8";
    const result = () => user.isValidUser(input);

    expect(result).toThrow();
  });

  test(`사용자가 공백을 입력할 경우 예외발생`, () => {
    const user = new User();
    const input = " ";
    const result = () => user.isValidUser(input);

    expect(result).toThrow();
  });
});
