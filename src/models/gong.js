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

  /**
   * 주어진 공의 스트라이크 갯수를 구합니다.
   * @param {Gong} otherGong
   * @returns {number} 스트라이크 갯수
   */
  countStrike(otherGong) {
    return this.#numbers.reduce(
      (count, number, index) =>
        count +
        // 숫자와 인덱스가 모두 같은 경우 +1
        (otherGong.#numbers[index] === number ? 1 : 0),
      0,
    );
  }

  /**
   * 주어진 공의 볼 갯수를 구합니다.
   * @param {Gong} otherGong
   * @returns {number} 볼 갯수
   */
  countBall(otherGong) {
    return this.#numbers.reduce(
      (count, number, index) =>
        count +
        // 숫자는 포함하되 동일한 인덱스에 있지 않은 경우 +1
        (otherGong.#numbers[index] !== number && otherGong.#numbers.includes(number) ? 1 : 0),
      0,
    );
  }
}

module.exports = Gong;
