const App = require('../src/App');

describe('score message generation test', () => {
  test('같은 수가 전혀 없음', () => {
    const app = new App();
    const STRIKE = 0;
    const BALL = 0;
    const result = app.scoreMessage(STRIKE, BALL);

    expect(result).toEqual('낫싱');
  });

  test('볼만 있음', () => {
    const app = new App();
    const STRIKE = 0;
    const BALL = 1;
    const result = app.scoreMessage(STRIKE, BALL);

    expect(result).toEqual('1볼');
  });

  test('스트라이크만 있음', () => {
    const app = new App();
    const STRIKE = 1;
    const BALL = 0;
    const result = app.scoreMessage(STRIKE, BALL);

    expect(result).toEqual('1스트라이크');
  });

  test('볼과 스트라이크가 함께 있음', () => {
    const app = new App();
    const STRIKE = 1;
    const BALL = 1;
    const result = app.scoreMessage(STRIKE, BALL);

    expect(result).toEqual('1볼 1스트라이크');
  });
});
