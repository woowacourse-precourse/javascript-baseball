const { GAME_STATE, SELECT } = require('../constants/values');
const validator = require('../utils/validator');
const OutputView = require('../views/OutputView');

class UserSelect {
  #select;

  constructor() {
    this.#initSelect();
  }

  #initSelect() {
    this.#select = 0;
  }

  set(select) {
    this.#select = parseInt(select, 10);
    this.#checkSelect();
  }

  #checkSelect() {
    try {
      this.#validateSelect();
    } catch (error) {
      OutputView.printError(error);
      return false;
    }

    return true;
  }

  #validateSelect() {
    validator.checkTruthy(this.#select);
    validator.checkTypeOfNumber(this.#select);
    validator.checkSelectNumber(this.#select);
  }

  get() {
    return this.#select === SELECT.RESTART
      ? GAME_STATE.PLAYING
      : GAME_STATE.STOP;
  }
}

module.exports = UserSelect;
