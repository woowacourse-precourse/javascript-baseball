const Game = require('../src/Game');

const game = new Game();

game.answer = [9, 5, 1];

describe('힌트 테스트', () => {
  test('볼만 있는 경우 볼만 출력', () => {
    game.userInput = [1, 2, 3];
    game.setCount();
    game.setHint();
    expect(game.hint).toEqual('1볼');
  });

  test('스트라이크만 있는 경우 스트라이크만 출력', () => {
    game.userInput = [9, 8, 7];
    game.setCount();
    game.setHint();
    expect(game.hint).toEqual('1스트라이크');
  });

  test('볼과 스트라이크가 함께 있는 경우 볼, 스트라이크 순서로 출력', () => {
    game.userInput = [1, 5, 9];
    game.setCount();
    game.setHint();
    expect(game.hint).toEqual('2볼 1스트라이크');
  });

  test('하나도 없는 경우 낫싱 출력', () => {
    game.userInput = [6, 7, 8];
    game.setCount();
    game.setHint();
    expect(game.hint).toEqual('낫싱');
  });
});
