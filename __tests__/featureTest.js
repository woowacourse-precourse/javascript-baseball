const App = require('../src/App');

describe('상대방(Computer)의 숫자 테스트', () => {
  test('1-1. 숫자가 아닌 경우', () => {
    const app = new App();
    app
      .createComputerNum()
      .split('')
      .forEach((num) => expect(Number.isNaN(num)).toBe(false));
  });
});
