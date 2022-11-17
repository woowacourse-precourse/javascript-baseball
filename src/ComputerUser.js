const { Random } = require('@woowacourse/mission-utils');
class ComputerUser {
  /**
   * 컴퓨터가 생성한 값
   * @type {[number, number, number]}
   */
  #computerInput;

  constructor() {
    this.#computerInput = this.#createRandomAnswer();
  }

  get computerInput() {
    return this.#computerInput;
  }

  /**
   * 컴퓨터라는 개발자가 만든 사용자가 랜덤으로 세 자리 배열을 생성하여 반환한다.
   * @returns {[number, number, number]} 랜덤으로 생성된 세 자리 배열
   */
  #createRandomAnswer() {
    const answers = [];
    while (answers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answers.includes(number)) {
        answers.push(number);
      }
    }
    return answers;
  }
}

module.exports = ComputerUser;
