const ExceptionCheck = require("../src/ExceptionCheck");


describe("유저 입력 숫자 테스트", () => {
  test("user가 중복된 숫자를 입력했을시 에러뜨는지 확인", () => {
    const exceptionCheck = new ExceptionCheck();
    const input = '112';
    expect(() => { exceptionCheck.UserInputCheck(input); }).toThrow();
  });

  test("user가 숫자 이외의 입력했을시 에러뜨는지 확인", () => {
    const exceptionCheck = new ExceptionCheck();
    const input = 'asb';
    expect(() => { exceptionCheck.UserInputCheck(input); }).toThrow();
  });

  test("user가 3개 이상의 숫자 입력했을시 에러뜨는지 확인", () => {
    const exceptionCheck = new ExceptionCheck();
    const input = '1234';
    expect(() => { exceptionCheck.UserInputCheck(input); }).toThrow();
  });

  test("user가 3개 이하의 숫자 입력했을시 에러뜨는지 확인", () => {
    const exceptionCheck = new ExceptionCheck();
    const input = '1';
    expect(() => { exceptionCheck.UserInputCheck(input); }).toThrow();
  });

  test("user의 input에 0이 포함될때 에러뜨는지 확인", () => {
    const exceptionCheck = new ExceptionCheck();
    const input = '012';
    expect(() => { exceptionCheck.UserInputCheck(input); }).toThrow();
  });

  test("user가 1과 2이외의 숫자를 입력했을시에 에러 확인", () => {
    const exceptionCheck = new ExceptionCheck();
    const input = 3;
    expect(() => { exceptionCheck.restartInputCheck(); }).toThrow();
  });

  test("user가 1과 2이외의 숫자를 입력했을시에 에러 확인", () => {
    const exceptionCheck = new ExceptionCheck();
    const input = 'a';
    expect(() => { exceptionCheck.restartInputCheck(); }).toThrow();
  });
});