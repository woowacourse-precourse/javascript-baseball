const App = require('../src/App');

describe('App Test', () => {
  test('test isValidMenuInput', () => {
    expect(App.isValidMenuInput('1')).toBe(true);
    expect(App.isValidMenuInput('2')).toBe(true);
    expect(App.isValidMenuInput('3')).toBe(false);
    expect(App.isValidMenuInput('12')).toBe(false);
    expect(App.isValidMenuInput('a')).toBe(false);
  });
});
