const BaseballGame = require('../src/BaseballGame');

describe('세자리 난수 생성 테스트', () => {
  test('createComputerNumber를 실행하면 길이가 3인 배열이 반환되어야 한다.', () => {
    const baseballGame = new BaseballGame();
    const randomNumbers = baseballGame.createComputerNumber();

    expect(randomNumbers).toHaveLength(3);
  });

  test('createComputerNumber를 실행하면 중복된 숫자가 없어야 한다.', () => {
    const baseballGame = new BaseballGame();
    const randomNumbers = baseballGame.createComputerNumber();
    const set = new Set();

    randomNumbers.map((number) => set.add(number));

    expect(set.size).toBe(3);
  });
});
