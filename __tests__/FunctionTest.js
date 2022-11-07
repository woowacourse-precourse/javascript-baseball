const {
  validByRegex,
  validDuplicate,
  validInput,
  validOneOrTwo,
} = require('../src/Function');

describe('Function 테스트', () => {
  test('validByRegex 테스트', () => {
    const input = ['123', '890', '678', '1234'];
    const answer = [false, true, false, true];

    const message = input.map(el => validByRegex(el));
    expect(message).toStrictEqual(answer);
  });

  test('validDuplicate 테스트', () => {
    const input = ['112', '123', '222'];
    const answer = [true, false, true];

    const message = input.map(el => validDuplicate(el));
    expect(message).toStrictEqual(answer);
  });

  test('validInput 테스트', () => {
    expect(() => {
      validInput('124');
    }).toThrow();
  });

  test('validOneOrTwo 테스트', () => {
    expect(() => {
      validOneOrTwo('2');
    }).toThrow();
  });
});
