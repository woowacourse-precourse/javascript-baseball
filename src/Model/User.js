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
    this.validNumber(number);
    this.#number = number;
  }

  validNumber(number) {
    //세글자를 입력했는가
    if (number.length !== 3) {
      throw '[ERROR] 세개의 숫자를 입력 해주세요.';
    }
    //숫자를 입력했는가
    const regEx = /[1-9]{3}/i;
    if (!regEx.test(number)) {
      throw '[ERROR] 숫자를 입력해 주세요';
    }
  }
}

module.exports = User;

