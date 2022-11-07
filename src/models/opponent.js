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
}

module.exports = Opponent;
