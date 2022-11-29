const { Random } = require('@woowacourse/mission-utils');
const { BASEBALL } = require('./constants/Constants');

class BaseballGame {
  #answerNumber = [];

  makeAnswerNumber() {
    while (this.#answerNumber.length < BASEBALL.NUMBER_LENGTH) {
      const NUMBER = this.getRandomNumber();
      if (!this.#answerNumber.includes(NUMBER)) {
        this.#answerNumber.push(NUMBER);
      }
    }
  }

  getRandomNumber() {
    return Random.pickNumberInRange(BASEBALL.NUMBER_START, BASEBALL.NUMBER_END);
  }
}

module.exports = BaseballGame;
