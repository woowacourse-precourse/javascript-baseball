const {
  isValidInput,
  validLength,
  validRange,
  duplication,
} = require('../src/Validation');

const ERROR = require('../src/Constants/Error');

describe('길이 검사', () => {
  test('case1', () => {
    expect(validLength([1, 2, 3])).toBeTruthy();
  });
  test('case2', () => {
    expect(validLength([1, 2, 3, 4])).toBeFalsy();
  });
  test('case3', () => {
    expect(validLength([1, 2])).toBeFalsy();
  });
  test('case4', () => {
    expect(validLength([])).toBeFalsy();
  });
});

describe('범위 검사', () => {
  test('case1', () => {
    expect(validRange([1, 2, 0])).toBeFalsy();
  });
  test('case2', () => {
    expect(validRange([0, 3, 4])).toBeFalsy();
  });
  test('case3', () => {
    expect(validRange([1, 2, 3])).toBeTruthy();
  });
  test('case4', () => {
    expect(validRange([0, 0, 0])).toBeFalsy();
  });
});

describe('중복 검사', () => {
  test('case1', () => {
    expect(duplication([1, 2, 3])).toBeFalsy();
  });
  test('case2', () => {
    expect(duplication([1, 2, 2])).toBeTruthy();
  });
  test('case3', () => {
    expect(duplication([1, 1, 1])).toBeTruthy();
  });
});

describe('유효값 검사', () => {
  test('case1', () => {
    expect(isValidInput([1, 2, 3])).toBeTruthy();
  });
  test('case2', () => {
    expect(() => isValidInput([1, 2, 2])).toThrow(ERROR.DUPLICATION);
  });
  test('case3', () => {
    expect(() => isValidInput(['a', 1])).toThrow(ERROR.NAN);
  });
  test('case4', () => {
    expect(() => isValidInput([0, 1, 2])).toThrow(ERROR.RANGE);
  });
  test('case5', () => {
    expect(() => isValidInput([5, 1, 2, 4])).toThrow(ERROR.LENGTH);
  });
});
