const { Exception, BaseBallException, NextException } = require('../src/Exception');

describe('Exception클래스 - 숫자야구 예외 처리 로직', () => {
  test('(입력값 "1345"', () => {
    const input = '1345';
    const exception = new Exception();
    const throwErrorFn = () => exception.occurError(new BaseBallException(input));

    expect(throwErrorFn).toThrow();
  });

  test('(공백 + 문자)입력값 "13 a"', () => {
    const input = '13 a';
    const exception = new Exception();
    const throwErrorFn = () => exception.occurError(new BaseBallException(input));

    expect(throwErrorFn).toThrow();
  });

  test('(끝에 공백)입력값 "13 "', () => {
    const input = '13 ';
    const exception = new Exception();
    const throwErrorFn = () => exception.occurError(new BaseBallException(input));

    expect(throwErrorFn).toThrow();
  });

  test('(앞 뒤 공백)입력값 " 13 "', () => {
    const input = ' 13 ';
    const exception = new Exception();
    const throwErrorFn = () => exception.occurError(new BaseBallException(input));

    expect(throwErrorFn).toThrow();
  });

  test('(문자 포함)입력값 "13ab"', () => {
    const input = '13 ';
    const exception = new Exception();
    const throwErrorFn = () => exception.occurError(new BaseBallException(input));

    expect(throwErrorFn).toThrow();
  });

  test('(중복o)입력값 "133"', () => {
    const input = '133';
    const exception = new Exception();
    const throwErrorFn = () => exception.occurError(new BaseBallException(input));

    expect(throwErrorFn).toThrow();
  });
});

describe('예외 처리 로직 Exception클래스 - (재시작/종료) 입력값이 재시작(1)또는 종료(2)인가요?', () => {
  test('(0과 1을 제외한 숫자)입력값 "3"', () => {
    const input = '3';
    const exception = new Exception();
    const throwErrorFn = () => exception.occurError(new NextException(input));

    expect(throwErrorFn).toThrow();
  });

  test('(0과 1을 제외한 문자)입력값 "a"', () => {
    const input = 'a';
    const exception = new Exception();
    const throwErrorFn = () => exception.occurError(new NextException(input));

    expect(throwErrorFn).toThrow();
  });
});
