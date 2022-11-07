const MissionUtils = require('@woowacourse/mission-utils');
const Messages = require('../messages');

/**
 * 숫자 야구게임에서 서로 다른 숫자 3개를 묶에 취급하는 클래스
 */
class Gong {
  /** @type {[number, number, number]} 서로 다른 숫자 3개 */
  #numbers;

  /**
   * 주어진 3개의 숫자로 공을 생성합니다.
   * @param {[number, number, number]} numbers
   */
  constructor(numbers) {
    this.numbers = numbers;
    Object.freeze(this);
  }

  /**
   * 문자열로부터 공을 생성하여 반환합니다.
   * @param {string} text "135" 와 같이 서로 다른 3개의 수로 이루어진 문자열
   * @returns {Gong}
   */
  static parseGong(text) {
    if (text.length !== 3) throw new Error(Messages.GONG_INVALID_FORMAT);

    if (!/^[1-9]{3}$/.test(text)) throw new Error(Messages.GONG_INVALID_FORMAT);

    const numbers = text.split('').map(Number);

    if (new Set(numbers).size !== 3) throw new Error(Messages.GONG_INVALID_FORMAT);

    return new Gong(numbers);
  }

  /**
   * 무작위 숫자로 공을 생성하여 반환합니다.
   * @returns {Gong}
   */
  static fromRandom() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return new Gong(numbers);
  }
}

module.exports = Gong;
