const MissionUtils = require('@woowacourse/mission-utils');
const { readUserNumber } = require('../View/InputView');

class User {
  #number;

  constructor() {
    this.#number;
  }

  get number() {
    return this.#number;
  }

  getNumber() {
    readUserNumber(this);
  }

  setNumber(number) {
    this.#number = number;
  }
}

module.exports = User;

