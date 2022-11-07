const {
  isValidInput,
  validLength,
  validRange,
  duplication,
} = require('../src/Validation');

const ERROR = require('../src/Constants/Error');

describe('길이 검사', () => {
  test('길이가 맞는 123', () => {
    expect(validLength([1, 2, 3])).toBeTruthy();
  });
  test('길이 초과한 1234', () => {
    expect(validLength([1, 2, 3, 4])).toBeFalsy();
  });
  test('길이 미달인 12', () => {
    expect(validLength([1, 2])).toBeFalsy();
  });
  test('공백', () => {
    expect(validLength([])).toBeFalsy();
  });
});

describe('범위 검사', () => {
  test('범위 초과인 120', () => {
    expect(validRange([1, 2, 0])).toBeFalsy();
  });
  test('범위 초과인 034', () => {
    expect(validRange([0, 3, 4])).toBeFalsy();
  });
  test('범위 이내인 123', () => {
    expect(validRange([1, 2, 3])).toBeTruthy();
  });
  test('범위 초과인 000', () => {
    expect(validRange([0, 0, 0])).toBeFalsy();
  });
});

describe('중복 검사', () => {
  test('중복이 없는 123', () => {
    expect(duplication([1, 2, 3])).toBeFalsy();
  });
  test('중복이 있는 122', () => {
    expect(duplication([1, 2, 2])).toBeTruthy();
  });
  test('중복이 있는 111', () => {
    expect(duplication([1, 1, 1])).toBeTruthy();
  });
});

describe('모든 유효값 검사 함수를 통합한 isValidInput 테스트', () => {
  test('올바른 인풋인 123', () => {
    expect(isValidInput([1, 2, 3])).toBeTruthy();
  });
  test('중복인 122', () => {
    expect(() => isValidInput([1, 2, 2])).toThrow(ERROR.DUPLICATION);
  });
  test('숫자가 아닌 a1', () => {
    expect(() => isValidInput(['a', 1])).toThrow(ERROR.NAN);
  });
  test('범위를 초과한 012', () => {
    expect(() => isValidInput([0, 1, 2])).toThrow(ERROR.RANGE);
  });
  test('길이를 초과한 5124', () => {
    expect(() => isValidInput([5, 1, 2, 4])).toThrow(ERROR.LENGTH);
  });
});
