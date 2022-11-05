const { validLength } = require('../src/Validation');

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
