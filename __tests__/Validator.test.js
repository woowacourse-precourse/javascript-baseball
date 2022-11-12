const InValidInputError = require('../src/error/InValidInputError');
const Validator = require('../src/Validator');

describe('Validator 테스트', () => {
  test('숫자인지 확인', () => {
    const input = '123';
    const result = Validator.isNumber(input);
    const errorInput = 'abc';
    const willThrow = () => Validator.isNumber(errorInput);

    expect(result).toEqual(true);
    expect(willThrow).toThrow();
  });

  test('범위안에 있는 값인지 확인', () => {
    const input = '123';
    const result = Validator.isRange(input, 1, 9);
    const errorInput = '0123';
    const willThrow = () => Validator.isRange(errorInput, 1, 9);

    expect(result).toEqual(true);
    expect(willThrow).toThrow();
  });

  test('값의 길이를 확인', () => {
    const input = '123';
    const result = Validator.isLength(input, 3);
    const errorInput = '1234';
    const willThrow = () => Validator.isLength(errorInput, 3);

    expect(result).toEqual(true);
    expect(willThrow).toThrow(InValidInputError);
  });

  test('unique한 값인지 확인', () => {
    const input = '123456';
    const result = Validator.isUnique(input);
    const errorInput = '112345';
    const willThrow = () => Validator.isUnique(errorInput);

    expect(result).toEqual(true);
    expect(willThrow).toThrow();
  });
});
