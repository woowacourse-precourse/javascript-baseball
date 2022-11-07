const Validation = require('../src/utils/validation');
const validation = new Validation();

describe('숫자 입력 예외 테스트', () => {
  test('숫자가 아닌 문자를 입력한 경우', () => {
    const input = 'onetwothree';
    expect(() => {
      validation.checkErrorofInput(input, 'start');
    }).toThrow();
  });
  test('0이 포함된 수를 입력한 경우', () => {
    const input = 102;
    expect(() => {
      validation.checkErrorofInput(input, 'start');
    }).toThrow();
  });
  test('3자리가 아닌 수를 입력한 경우', () => {
    const input = 1234;
    expect(() => {
      validation.checkErrorofInput(input, 'start');
    }).toThrow();
  });
  test('숫자를 중복하여 입력한 경우', () => {
    const input = 122;
    expect(() => {
      validation.checkErrorofInput(input, 'start');
    }).toThrow();
  });
  test('숫자를 중복하여 입력한 경우', () => {
    const input = 122;
    expect(() => {
      validation.checkErrorofInput(input, 'start');
    }).toThrow();
  });
})

describe('재시작 여부 예외 테스트', () => {
  test('1이나 2가 아닌 수를 입력한 경우', () => {
    const input = 'hi';
    expect(() => {
      validation.checkErrorofInput(input, 'restart');
    }).toThrow();
  });
  test('1이나 2가 아닌 수를 입력한 경우 2', () => {
    const input = 3;
    expect(() => {
      validation.checkErrorofInput(input, 'restart');
    }).toThrow();
  });
})