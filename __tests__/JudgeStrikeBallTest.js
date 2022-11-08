const App = require('../src/App');

describe('Strike ball judge test', () => {
  test('스트라이크와 볼 판별', () => {
    const app = new App();
    const TARGET = [1, 2, 3];
    const INPUT = [5, 2, 1];
    const result = app.judgeStrikeBall(TARGET, INPUT);

    expect(result).toEqual({ strike: 1, ball: 1 });
  });
});
