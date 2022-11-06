const App = require('../src/App');

describe('Input string to array convert test', () => {
  test('길이가 3인 숫자 String을 길이가 3인 숫자 배열로 변경', () => {
    const app = new App();
    const INPUT = '153';
    const result = app.convertInputStringToArray(INPUT);

    expect(result).toEqual([1, 5, 3]);
  });
});
