const Game = require('../src/game');
const { RANDOM_NUMBER } = require('../src/constants');

describe('기능 구현 목록 테스트', () => {
  const game = new Game();

  test('시작 문구 출력', () => {
    const logSpy = jest.spyOn(console, 'log');

    game.init();

    expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });

  test('1에서 9까지 서로 다른 세자리 수 생성', () => {
    const random = game.generateRandomNumber(1, 9, 3);

    random.forEach((num) => {
      expect(RANDOM_NUMBER.RANGE.test(num)).toBe(true);
    });

    expect(random.length).toEqual(3);
    expect([...new Set(random)].length).toEqual(3);
  });
});
