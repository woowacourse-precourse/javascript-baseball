const App = require('../src/App');
const { getScore } = require('../src/util');

describe('Get Score 테스트', () => {
  test('case1', () => {
    const app = new App();
    const answer = [5, 3, 7];
    const query = '123';
    const result = getScore(answer, query);
    expect(result).toEqual([1, 0]);
  });
  test('case2', () => {
    const app = new App();
    const answer = [2, 3, 4];
    const query = '432';
    const result = getScore(answer, query);
    expect(result).toEqual([2, 1]);
  });
  test('case3', () => {
    const app = new App();
    const answer = [2, 3, 4];
    const query = '567';
    const result = getScore(answer, query);
    expect(result).toEqual([0, 0]);
  });
});
