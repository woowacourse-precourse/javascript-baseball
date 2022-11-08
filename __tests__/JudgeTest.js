const Judge = require('../src/Judge');

describe('Judge 클래스 테스트', () => {
  test('같은 숫자가 포함된 갯수를 반환해야 한다.', () => {
    const computer = [1, 5, 9];
    const player = [5, 2, 7];
    const result = Judge.countExist(computer, player);

    expect(result).toBe(1);
  });
  test('같은 인덱스에 같은 숫자가 들어있는 갯수를 반환해야 한다.', () => {
    const computer = [7, 5, 2];
    const player = [7, 1, 2];
    const result = Judge.countStrike(computer, player);

    expect(result).toBe(2);
  });
  test('판별 결과 - 낫싱', () => {
    const computer = [1, 2, 3];
    const player = [4, 5, 6];
    const result = Judge.getResult(computer, player);

    expect(result).toBe('낫싱');
  });
  test('판별 결과 - 볼', () => {
    const computer = [1, 2, 3];
    const player = [2, 8, 1];
    const result = Judge.getResult(computer, player);

    expect(result).toBe('2볼');
  });
  test('판별 결과 - 스트라이크', () => {
    const computer = [1, 2, 3];
    const player = [1, 8, 7];
    const result = Judge.getResult(computer, player);

    expect(result).toBe('1스트라이크');
  });
  test('판별 결과 - 볼, 스트라이크', () => {
    const computer = [5, 2, 3];
    const player = [2, 1, 3];
    const result = Judge.getResult(computer, player);

    expect(result).toBe('1볼 1스트라이크');
  });
});
