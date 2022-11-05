const { strikeCount, ballCount, isNothing } = require('../src/CheckAnswer');

describe('스트라이크 개수', () => {
  test('case1', () => {
    expect(strikeCount([1, 2, 3], [1, 2, 3])).toEqual(3);
  });
  test('case2', () => {
    expect(strikeCount([1, 2, 3], [1, 2, 4])).toEqual(2);
  });
  test('case3', () => {
    expect(strikeCount([4, 6, 7], [8, 6, 9])).toEqual(1);
  });
  test('case4', () => {
    expect(strikeCount([1, 2, 3], [4, 5, 6])).toEqual(0);
  });
});

describe('볼 개수', () => {
  test('case1', () => {
    expect(ballCount([1, 2, 3], [3, 1, 2])).toEqual(3);
  });
  test('case2', () => {
    expect(ballCount([1, 2, 3], [2, 1, 4])).toEqual(2);
  });
  test('case3', () => {
    expect(ballCount([1, 2, 3], [3, 4, 5])).toEqual(1);
  });
  test('case4', () => {
    expect(ballCount([1, 2, 3], [4, 5, 6])).toEqual(0);
  });
});

describe('낫싱 검사', () => {
  test('case1', () => {
    expect(isNothing(1, 2)).toEqual(false);
  });
  test('case2', () => {
    expect(isNothing(0, 0)).toEqual(true);
  });
});
