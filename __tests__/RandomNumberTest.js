const App = require('../src/App');

describe('랜덤 숫자 테스트', () => {
  test('getRandonNumber 메서드는 111에서 999사이의 숫자를 반환', () => {
    const RANDOM_NUMBER = App.getRandomNumber();

    expect(RANDOM_NUMBER).toBeGreaterThanOrEqual(111);
    expect(RANDOM_NUMBER).toBeLessThanOrEqual(999);
  });
});
