const { Random } = require("@woowacourse/mission-utils");

class Computer {
  constructor() {
    this._answer = this.makeAnswer();
  }

  makeAnswer() {
    return Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  get answer() {
    return this._answer;
  }

  set answer(newAnswer) {
    this._answer = newAnswer;
  }
}

module.exports = Computer;