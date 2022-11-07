const {Console} = require('@woowacourse/mission-utils');
const Messages = require('./messages');
const Gong = require('./models/gong');
const Opponent = require('./models/opponent');

/**
 * 한 판의 게임에 대한 클래스. 게임이 종료된 후에는 사용해선 안된다.
 */
class Game {
  /** @type {Opponent} */
  #opponent;

  /** @type {() => void} */
  #endCallback;

  /**
   * @param {Opponent} opponent
   */
  constructor(opponent = null) {
    this.#opponent = opponent ?? new Opponent();
  }

  /**
   * 게임이 종료될 때 주어진 콜백이 호출된다.
   * @param {() => void} callback
   */
  onEnd(callback = null) {
    this.#endCallback = callback;
  }

  /**
   * 한 판의 게임이 실행된다.
   */
  play() {
    this.#readGong();
  }

  /**
   * 플레이어로부터 공을 입력받는다.
   */
  #readGong() {
    Console.readLine(Messages.INPUT_YOUR_GONG, (text) => {
      const gong = Gong.parseGong(text);
      if (!this.#guess(gong)) {
        this.#readGong();
        return;
      }
      this.#endCallback?.();
    });
  }

  /**
   * 상대방이 들고있는 공을 추측한다.
   * @param {Gong} gong
   * @returns {boolean} 공을 맞췄는지 여부를 반환한다.
   */
  #guess(gong) {
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

    if (strike === 3) {
      Console.print(Messages.GUESS_GONG_RESULT_SUCCESS);
      return true;
    }
    return false;
  }
}

module.exports = Game;
