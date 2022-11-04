const Game = require('../src/game');

describe('기능 목록 구현 테스트', () => {
  test('시작 문구 출력', () => {
    const logSpy = jest.spyOn(console, 'log');

    const game = new Game();
    game.init();

    expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });
});
