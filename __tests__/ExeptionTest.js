const ExceptionCheck = require("../src/ExceptionCheck");


describe("유저 입력 숫자 테스트", () => {
  test("user가 중복된 숫자를 입력했을시 에러뜨는지 확인", () => {
    const exceptionCheck = new ExceptionCheck();
    const input = '112';
    expect(() => { exceptionCheck.UserInputCheck(input); }).toThrow();
  });
});