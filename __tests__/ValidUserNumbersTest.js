const { Console } = require('@woowacourse/mission-utils');

const ValidUserNumbers = require('../src/game-utils/ValidUserNumbers');

afterAll(() => {
  Console.close();
});

describe('정상적인 값일 때, true를 반환하는지 확인', () => {
  const validUserInput = new ValidUserNumbers()
  test('case1', () => {
    expect(validUserInput.isValidUserInput('123')).toBeTruthy();
  });

  test('case2', () => {
    expect(validUserInput.isValidUserInput('175')).toBeTruthy();
  });

  test('case3', () => {
    expect(validUserInput.isValidUserInput('369')).toBeTruthy();
  });

  test('case4', () => {
    expect(validUserInput.isValidUserInput('592')).toBeTruthy();
  });
});

describe('입력값의 길이가 3이지만 정상적인 값이 아닐 때, false를 반환하는지 확인', () => {
  const validUserInput = new ValidUserNumbers()
  test('case1', () => {
    expect(validUserInput.isValidUserInput('abc')).toBeFalsy();
  });

  test('case2', () => {
    expect(validUserInput.isValidUserInput('103')).toBeFalsy();
  });

  test('case3', () => {
    expect(validUserInput.isValidUserInput('1pm')).toBeFalsy();
  });

  test('case4', () => {
    expect(validUserInput.isValidUserInput('qwe')).toBeFalsy();
  });
});

describe('입력값의 길이가 3이 아닐 때, false를 반환하는지 확인', () => {
  const validUserInput = new ValidUserNumbers()
  test('case1', () => {
    expect(validUserInput.isValidUserInput('')).toBeFalsy();
  });

  test('case2', () => {
    expect(validUserInput.isValidUserInput('1')).toBeFalsy();
  });

  test('case3', () => {
    expect(validUserInput.isValidUserInput('12')).toBeFalsy();
  });

  test('case4', () => {
    expect(validUserInput.isValidUserInput('1234')).toBeFalsy();
  });
});

describe('입력값에 중복되는 값이 들어있을 때, false를 반환하는지 확인', () => {
  const validUserInput = new ValidUserNumbers()
  test('case1', () => {
    expect(validUserInput.isValidUserInput('122')).toBeFalsy();
  });

  test('case2', () => {
    expect(validUserInput.isValidUserInput('222')).toBeFalsy();
  });

  test('case3', () => {
    expect(validUserInput.isValidUserInput('344')).toBeFalsy();
  });

  test('case4', () => {
    expect(validUserInput.isValidUserInput('877')).toBeFalsy();
  });
});