const App = require('../src/App');

describe('숫자 야구 게임', () => {
  test('3가지 랜덤 숫자', () => {
    const app = new App();
    const threeRandomNumber = app.getRandomNumber();
    expect(threeRandomNumber.join('')).toMatch(/[1-9]{3}/g);
  });
});
