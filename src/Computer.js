const { Random } = require("@woowacourse/mission-utils");
const { ANSWER_LENGTH } = require("./constants");

const MINIMUM_RANGE = 1;
const MAXIMUM_RANGE = 9;

class Computer {
  constructor() {
    this._answer = this.makeAnswer();
  }

  makeAnswer() {
    return Random.pickUniqueNumbersInRange(MINIMUM_RANGE, MINIMUM_RANGE, ANSWER_LENGTH);
  }

  get answer() {
    return this._answer;
  }

  set answer(newAnswer) {
    this._answer = newAnswer;
  }
}

module.exports = Computer;