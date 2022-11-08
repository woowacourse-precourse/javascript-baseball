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
  });

  test('test pickThreeDigits', () => {
    expect((new Set(App.pickThreeDigits())).size).toBe(3);
  });

  test('test getGuessArray', () => {
    expect(App.getGuessArray('123')).toEqual([1, 2, 3]);
  });
});
