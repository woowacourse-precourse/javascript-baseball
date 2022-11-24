const {Console} = require('@woowacourse/mission-utils');
const Messages = require('./Messages');
const Gong = require('./models/Gong');
const Opponent = require('./models/Opponent');

/**
 * 한 판의 게임에 대한 클래스. 게임이 종료된 후에는 사용해선 안된다.
 */
class Game {
  /** @type {Opponent} */
  #opponent;

  /**
   * @param {Opponent} opponent
   */
  constructor(opponent = new Opponent()) {
    this.#opponent = opponent;
  }

  /**
   * 상대방이 들고있는 공을 추측한다.
   * @param {Gong} gong
   * @returns {boolean} 공을 맞췄는지 여부를 반환한다.
   */
  guess(gong) {
    const {ball, strike} = this.#opponent.guessGong(gong);
    const guessResult =
      [
        [ball, Messages.GUESS_GONG_RESULT_BALL],
        [strike, Messages.GUESS_GONG_RESULT_STRIKE],
      ]
        .filter(([count]) => count > 0)
        .map(([count, suffix]) => `${count}${suffix}`)
        .join(' ') || Messages.GUESS_GONG_RESULT_NOTHING;

    Console.print(guessResult);

    if (strike === Gong.SIZE) {
      Console.print(Messages.GUESS_GONG_RESULT_SUCCESS);
      return true;
    }
    return false;
  }
}

module.exports = Game;
