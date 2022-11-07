const { Random } = require("@woowacourse/mission-utils");
const { ANSWER_LENGTH } = require("./constants");

const MINIMUM_RANGE = 1;
const MAXIMUM_RANGE = 9;

class Computer {
  constructor() {
    this._answer = this.makeAnswer();
  }

  makeAnswer() {
    const answer = [];
    while (answer.length < ANSWER_LENGTH) {
      const number = Random.pickNumberInRange(MINIMUM_RANGE, MAXIMUM_RANGE);
      if (answer.includes(number) === false) {
        answer.push(number);
      }
    }
    return answer;
  }

  get answer() {
    return this._answer;
  }

  set answer(newAnswer) {
    this._answer = newAnswer;
  }
}

module.exports = Computer;