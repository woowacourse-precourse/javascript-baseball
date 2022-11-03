const fn = require('../src/App');

describe('validation test', () => {
  test('correct', () => {
    const input = '123';
    const result = fn.validationCheck(input);

    expect(result).toEqual(true);
  });

  test('incorrect1 : length > 3', () => {
    const input = '1234';
    const result = fn.validationCheck(input);

    expect(result).toEqual(false);
  });

  test('incorrect2 : contain not number', () => {
    const input = '12a';
    const result = fn.validationCheck(input);

    expect(result).toEqual(false);
  });

  test('incorrect2 : contain 0', () => {
    const input = '120';
    const result = fn.validationCheck(input);

    expect(result).toEqual(false);
  });
});
