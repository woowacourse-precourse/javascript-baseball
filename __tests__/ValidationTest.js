const {
  isValidInput,
  validLength,
  validRange,
  duplication,
} = require('../src/Validation');

const ERROR = require('../src/Constants/Error');

describe('길이 검사', () => {
  test('case1', () => {
    expect(validLength([1, 2, 3])).toEqual(true);
  });
  test('case2', () => {
    expect(validLength([1, 2, 3, 4])).toEqual(false);
  });
  test('case3', () => {
    expect(validLength([1, 2])).toEqual(false);
  });
  test('case4', () => {
    expect(validLength([])).toEqual(false);
  });
});

describe('범위 검사', () => {
  test('case1', () => {
    expect(validRange([1, 2, 0])).toEqual(false);
  });
  test('case2', () => {
    expect(validRange([0, 3, 4])).toEqual(false);
  });
  test('case3', () => {
    expect(validRange([1, 2, 3])).toEqual(true);
  });
  test('case4', () => {
    expect(validRange([0, 0, 0])).toEqual(false);
  });
});

describe('중복 검사', () => {
  test('case1', () => {
    expect(duplication([1, 2, 3])).toEqual(false);
  });
  test('case2', () => {
    expect(duplication([1, 2, 2])).toEqual(true);
  });
  test('case3', () => {
    expect(duplication([1, 1, 1])).toEqual(true);
  });
});

describe('유효값 검사', () => {
  test('case1', () => {
    expect(isValidInput([1, 2, 3])).toEqual(true);
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
