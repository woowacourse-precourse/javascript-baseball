const { validate } = require('../src/utils');

describe('정상적인 값일 때, true를 반환하는지 확인', () => {
  test('case1', () => {
    expect(validate('123')).toBeTruthy();
  });

  test('case2', () => {
    expect(validate('175')).toBeTruthy();
  });

  test('case3', () => {
    expect(validate('369')).toBeTruthy();
  });

  test('case4', () => {
    expect(validate('592')).toBeTruthy();
  });
});
