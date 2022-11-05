const App = require('../src/App');
const app = new App();

describe('상대방(Computer)의 숫자 테스트', () => {
  test('1-1. 숫자가 아닌 경우', () => {
    app
      .createComputerNum()
      .forEach((num) => expect(Number.isNaN(num)).toBe(false));
  });
  test('1-2. 각 숫자가 1~9 범위가 아닌 경우', () => {
    app
      .createComputerNum()
      .forEach((num) => expect(num >= 1 && num <= 9).toBe(true));
  });
});
