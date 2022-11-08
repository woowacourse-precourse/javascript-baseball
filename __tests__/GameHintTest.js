const GameHint = require('../src/GameHint');

describe('게임 힌트 테스트 🎮', () => {
  test('✨ 3스트라이크!', () => {
    const gameHint = new GameHint();
    const randomNumbers = [1, 2, 3];
    const playerInput = '123';

    expect(gameHint.isThreeStrike(randomNumbers, playerInput)).toBeTruthy();
  });

  test('✨ ball 개수 계산 : ball이 1개 존재합니다.', () => {
    const gameHint = new GameHint();
    const randomNumbers = [1, 2, 3];
    const playerInput = [2, 4, 5];

    expect(gameHint.countBall(randomNumbers, playerInput)).toBe(1);
  });

  test('✨ strike 개수 계산 : strike가 2개 존재합니다.', () => {
    const gameHint = new GameHint();
    const randomNumbers = [1, 2, 3];
    const playerInput = [1, 2, 9];

    expect(gameHint.countStrike(randomNumbers, playerInput)).toBe(2);
  });
});
