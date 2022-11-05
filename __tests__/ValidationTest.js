const { validLength, validRange, duplication } = require('../src/Validation');

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
