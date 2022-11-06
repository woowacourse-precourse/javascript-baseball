const App = require('../src/App');

describe('랜덤 숫자 테스트', () => {
  test('generateRandonNumber 메서드는 111에서 999사이의 숫자를 반환', () => {
    const RANDOM_NUMBER = Number(App.generateRandomNumber().join(''));

    expect(RANDOM_NUMBER).toBeGreaterThanOrEqual(111);
    expect(RANDOM_NUMBER).toBeLessThanOrEqual(999);
  });
});
