const MissionUtils = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE, GAME } = require('../Utils/Constant');
const { readUserNumber } = require('../View/InputView');

class User {
  #number;

  constructor() {
    this.#number;
  }

  validNumber(number) {
    //세글자를 입력했는가
    this.validLength(number);
    //숫자를 입력했는가
    this.validType(number);
  }

  validLength(number) {
    if (number.length !== GAME.LENGTH) {
      throw ERROR_MESSAGE.USER_NUMBER_COUNT;
    }
  }

  validType(number) {
    const regEx = /[1-9]{3}/i;
    if (!regEx.test(number)) {
      throw ERROR_MESSAGE.USER_NUMBER_TYPE;
    }
  }

  get number() {
    return this.#number;
  }

  getNumber(i) {
    return this.#number[i];
  }

  inputNumber(game) {
    readUserNumber(this, game);
  }

  setNumber(number) {
    this.validNumber(number);
    this.#number = number.split('').map((el) => Number(el));
  }
}

module.exports = User;

