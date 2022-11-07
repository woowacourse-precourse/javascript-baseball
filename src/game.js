const {print, read} = require('./input');
const Messages = require('./messages');
const Gong = require('./models/gong');
const Opponent = require('./models/opponent');

/**
 * 한 판의 게임에 대한 클래스. 게임이 종료된 후에는 사용해선 안된다.
 */
class Game {
  /** @type {Opponent} */
  #opponent;

  /**
   * @param {Opponent} opponent
   */
  constructor(opponent = null) {
    this.#opponent = opponent ?? new Opponent();
    Object.freeze(this);
  }

  /**
   * 한 판의 게임이 실행되며, 제어가 넘어간다.
   * 호출한 측에서는 await 을 사용하여 게임이 끝날 때까지 기다릴 수 있다.
   */
  async play() {
    while (true) {
      const gong = Gong.parseGong(await read(Messages.INPUT_YOUR_GONG));
      const {ball, strike} = this.#opponent.guessGong(gong);

      const guessResult =
        [
          [ball, Messages.GUESS_GONG_RESULT_BALL],
          [strike, Messages.GUESS_GONG_RESULT_STRIKE],
        ]
          .filter(([count]) => count > 0)
          .map(([count, suffix]) => `${count}${suffix}`)
          .join(' ') || Messages.GUESS_GONG_RESULT_NOTHING;

      print(guessResult);

      if (strike === 3) {
        print(Messages.GUESS_GONG_RESULT_SUCCESS);
        break;
      }
    }
  }
}

module.exports = Game;
