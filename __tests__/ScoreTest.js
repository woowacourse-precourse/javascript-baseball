const App = require('../src/App');

describe('점수 테스트', () => {
  const app = new App();

  test('볼 1 체크', () => {
    const computerNumber = [7, 1, 2];
    const userNumber = [1, 8, 3];

    expect(app.getScore(computerNumber, userNumber)).toEqual([0, 1]);
  });

  test('스트라이크 2 체크', () => {
    const computerNumber = [7, 1, 2];
    const userNumber = [7, 1, 3];

    expect(app.getScore(computerNumber, userNumber)).toEqual([2, 0]);
  });

  test('볼 1, 스트라이크 1 체크', () => {
    const computerNumber = [7, 1, 2];
    const userNumber = [7, 2, 3];

    expect(app.getScore(computerNumber, userNumber)).toEqual([1, 1]);
  });

  test('스트라이크 3 체크', () => {
    const computerNumber = [7, 1, 2];
    const userNumber = [7, 1, 2];

    expect(app.getScore(computerNumber, userNumber)).toEqual([3, 0]);
  });
});
