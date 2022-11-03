const App = require('../src/App');

describe('기능 구현 테스트 : computer', () => {
  test('✨ 서로 다른 3자리 숫자로 이루어져 있습니다.', () => {
    const app = new App();
    const numbers = app.makeRandomNumbers();
    const numbersLength = [...new Set(numbers)].length;

    expect(numbersLength).toBe(3);
  });
});
