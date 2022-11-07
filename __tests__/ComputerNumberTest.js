const { Console } = require('@woowacourse/mission-utils');

const { randomSelectComputerNumbers } = require('../src/game-utils/ComputerNumbers');

afterAll(() => {
  Console.close();
});

describe('string 타입으로 반환되는지 확인', () => {
  test('case1', () => {
    expect(typeof randomSelectComputerNumbers()).toBe('string');
  });

  test('case2', () => {
    expect(typeof randomSelectComputerNumbers()).toBe('string');
  });

  test('case3', () => {
    expect(typeof randomSelectComputerNumbers()).toBe('string');
  });

  test('case4', () => {
    expect(typeof randomSelectComputerNumbers()).toBe('string');
  });
});

describe('길이가 3으로 반환되는지 확인', () => {
  test('case1', () => {
    expect(randomSelectComputerNumbers().length).toBe(3);
  });

  test('case2', () => {
    expect(randomSelectComputerNumbers().length).toBe(3);
  });

  test('case3', () => {
    expect(randomSelectComputerNumbers().length).toBe(3);
  });

  test('case4', () => {
    expect(randomSelectComputerNumbers().length).toBe(3);
  });
});

describe('반환된 문자가 1부터 9까지의 숫자인지 확인', () => {
  test('case1', () => {
    expect([...randomSelectComputerNumbers()].every((element) => (element >= '1' && element <= '9'))).toBeTruthy();
  });

  test('case2', () => {
    expect([...randomSelectComputerNumbers()].every((element) => (element >= '1' && element <= '9'))).toBeTruthy();
  });

  test('case3', () => {
    expect([...randomSelectComputerNumbers()].every((element) => (element >= '1' && element <= '9'))).toBeTruthy();
  });

  test('case4', () => {
    expect([...randomSelectComputerNumbers()].every((element) => (element >= '1' && element <= '9'))).toBeTruthy();
  });
});
