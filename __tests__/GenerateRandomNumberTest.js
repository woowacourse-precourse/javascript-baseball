const { Console } = require('@woowacourse/mission-utils');

const { generateRandomNumber } = require('../src/utils');

afterAll(() => {
  Console.close();
});

describe('string 타입으로 반환되는지 확인', () => {
  test('case1', () => {
    expect(typeof generateRandomNumber()).toBe('string');
  });

  test('case2', () => {
    expect(typeof generateRandomNumber()).toBe('string');
  });

  test('case3', () => {
    expect(typeof generateRandomNumber()).toBe('string');
  });

  test('case4', () => {
    expect(typeof generateRandomNumber()).toBe('string');
  });
});

describe('길이가 3으로 반환되는지 확인', () => {
  test('case1', () => {
    expect(generateRandomNumber().length).toBe(3);
  });

  test('case2', () => {
    expect(generateRandomNumber().length).toBe(3);
  });

  test('case3', () => {
    expect(generateRandomNumber().length).toBe(3);
  });

  test('case4', () => {
    expect(generateRandomNumber().length).toBe(3);
  });
});

describe('반환된 문자가 1부터 9까지의 숫자인지 확인', () => {
  test('case1', () => {
    expect(
      [...generateRandomNumber()].every(
        (element) => element >= '1' && element <= '9'
      )
    ).toBeTruthy();
  });

  test('case2', () => {
    expect(
      [...generateRandomNumber()].every(
        (element) => element >= '1' && element <= '9'
      )
    ).toBeTruthy();
  });

  test('case3', () => {
    expect(
      [...generateRandomNumber()].every(
        (element) => element >= '1' && element <= '9'
      )
    ).toBeTruthy();
  });

  test('case4', () => {
    expect(
      [...generateRandomNumber()].every(
        (element) => element >= '1' && element <= '9'
      )
    ).toBeTruthy();
  });
});
