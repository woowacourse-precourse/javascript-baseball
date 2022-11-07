const Gong = require('./gong');

/**
 * 숫자 야구 게임에서 무작위의 숫자 3개를 정하는 상대방
 */
class Opponent {
  /** @type {Gong} 상대방이 고른 공 */
  #gong;

  /**
   * @param {Gong|null} gong 상대방이 고른 공. 주어지지 않을 시 무작위로 생성
   */
  constructor(gong = null) {
    this.#gong = gong ?? Gong.fromRandom();
    Object.freeze(this);
  }

  /**
   * 들고 있는 공을 추측합니다. 볼과 스트라이크 갯수를 반환합니다.
   * @param {Gong} gong
   * @returns {{ ball: number, strike: number }} 볼과 스트라이크의 갯수
   */
  guessGong(gong) {
    return {
      ball: this.#gong.countBall(gong),
      strike: this.#gong.countStrike(gong),
    };
  }
}

module.exports = Opponent;
