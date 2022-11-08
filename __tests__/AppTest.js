const App = require('../src/App');

describe('App Test', () => {
  test('test isValidMenuInput', () => {
    expect(App.isValidMenuInput('1')).toBe(true);
    expect(App.isValidMenuInput('2')).toBe(true);
    expect(App.isValidMenuInput('3')).toBe(false);
    expect(App.isValidMenuInput('12')).toBe(false);
    expect(App.isValidMenuInput('a')).toBe(false);
  });

  test('test isValidPlayInput', () => {
    expect(App.isValidPlayInput('123')).toBe(true);
    expect(App.isValidPlayInput('012')).toBe(false);
    expect(App.isValidPlayInput('1234')).toBe(false);
    expect(App.isValidPlayInput('abc')).toBe(false);
    expect(App.isValidPlayInput('111')).toBe(false);
  });

  test('test pickThreeDigits', () => {
    expect((new Set(App.pickThreeDigits())).size).toBe(3);
  });

  test('test getGuessArray', () => {
    expect(App.getGuessArray('123')).toEqual([1, 2, 3]);
  });

  test('test getGuessArray', () => {
    expect(App.judge([1, 2, 3], [1, 2, 3])).toEqual([0, 3]);
    expect(App.judge([1, 2, 3], [2, 1, 3])).toEqual([2, 1]);
    expect(App.judge([1, 2, 3], [4, 5, 6])).toEqual([0, 0]);
  });

  test('test getMessage', () => {
    expect(App.getMessage([0, 3])).toBe('3스트라이크');
    expect(App.getMessage([2, 1])).toBe('2볼 1스트라이크');
    expect(App.getMessage([3, 0])).toBe('3볼');
    expect(App.getMessage([0, 0])).toBe('낫싱');
  });
});
