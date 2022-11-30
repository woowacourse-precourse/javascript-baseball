const BaseballGame = require('../src/BaseballGame');

const baseballGame = new BaseballGame();
baseballGame.setAnswerNumber([1, 2, 3]);

describe('숫자 야구 게임 테스트', () => {
  test('3스트라이크 테스트', () => {
    const RESULT = baseballGame.isThreeStrike([1, 2, 3]);
    expect(RESULT).toBeTruthy();
  });

  test('볼 테스트', () => {
    expect(baseballGame.getBalls([1, 3, 9])).toBe(1);
  });

  test('스트라이크 테스트', () => {
    expect(baseballGame.getStrikes([1, 3, 9])).toBe(1);
  });

  test('힌트 테스트', () => {
    expect(baseballGame.getHint([1, 3, 9])).toBe('1볼 1스트라이크');
  });
});
