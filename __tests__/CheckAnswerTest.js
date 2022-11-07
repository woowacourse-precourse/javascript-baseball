const {
  strikeCount,
  ballCount,
  isNothing,
} = require('../src/ControlAnswer/CheckAnswer');

describe('스트라이크 개수', () => {
  test('3스트라이크', () => {
    expect(strikeCount([1, 2, 3], [1, 2, 3])).toEqual(3);
  });
  test('2스트라이크', () => {
    expect(strikeCount([1, 2, 3], [1, 2, 4])).toEqual(2);
  });
  test('1스트라이크', () => {
    expect(strikeCount([4, 6, 7], [8, 6, 9])).toEqual(1);
  });
  test('0스트라이크', () => {
    expect(strikeCount([1, 2, 3], [4, 5, 6])).toEqual(0);
  });
});

describe('볼 개수', () => {
  test('3볼', () => {
    expect(ballCount([1, 2, 3], [3, 1, 2])).toEqual(3);
  });
  test('2볼', () => {
    expect(ballCount([1, 2, 3], [2, 1, 4])).toEqual(2);
  });
  test('1볼', () => {
    expect(ballCount([1, 2, 3], [3, 4, 5])).toEqual(1);
  });
  test('0볼', () => {
    expect(ballCount([1, 2, 3], [4, 5, 6])).toEqual(0);
  });
});

describe('낫싱 검사', () => {
  test('낫싱 아님', () => {
    expect(isNothing(1, 2)).toBeFalsy();
  });
  test('낫싱임', () => {
    expect(isNothing(0, 0)).toBeTruthy();
  });
});
