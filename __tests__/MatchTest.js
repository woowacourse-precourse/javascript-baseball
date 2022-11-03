const App = require('../src/App');

const app = new App();

describe('App.match test', () => {
  test('1볼 1스트라이크', () => {
    const computer = '123';
    const user = '324';

    const result = app.match(computer, user);

    expect(result).toEqual([1, 1]);
  });

  test('2볼 1스트라이크', () => {
    const computer = '123';
    const user = '321';

    const result = app.match(computer, user);

    expect(result).toEqual([2, 1]);
  });

  test('낫싱', () => {
    const computer = '123';
    const user = '456';

    const result = app.match(computer, user);

    expect(result).toEqual([0, 0]);
  });

  test('3스트라이크', () => {
    const computer = '123';
    const user = '123';

    const result = app.match(computer, user);

    expect(result).toEqual([0, 3]);
  });
});
