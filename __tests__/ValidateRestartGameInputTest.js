const App = require('../src/App');

describe('Restart game input validation test', () => {
  test('1 또는 2가 아닌 경우 에러 throw', () => {
    const app = new App();
    const INPUT = '3';

    expect(() => {
      app.validateRestartGameInput(INPUT);
    }).toThrow();
  });

  test('1 또는 2인 경우 진행', () => {
    const app = new App();
    const INPUT = '1';

    expect(() => {
      app.validateRestartGameInput(INPUT);
    }).not.toThrow();
  });
});
