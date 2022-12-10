const ErrorMsg = require("../constants/ErrorMsg");
const { GAME_NUMBER_LENGTH } = require("../constants/GameConfig");
const InputError = require("../InputError");

class PlayerModel {
  #userInputArray;

  validate(input) {
    if (input.includes("0")) throw new InputError(ErrorMsg.NO_ZERO);

    if (!input) throw new InputError(ErrorMsg.NAN);

    if (input.length !== GAME_NUMBER_LENGTH) {
      throw new InputError(ErrorMsg.DIFFERENT_DIGIT);
    }

    if (new Set(input).size !== GAME_NUMBER_LENGTH) {
      throw new InputError(ErrorMsg.DUPLICATED);
    }

    if (input < 0) throw new InputError(ErrorMsg.NON_NEGATIVE);
  }

  inputToArray(input) {
    const array = [];
    let value = Number(input);
    this.validate(input);

    while (value > 0) {
      array.unshift(value % 10);
      value = Math.floor(value / 10);
    }

    this.#userInputArray = [...array];
  }

  getUserInputArray() {
    const inputArray = [...this.#userInputArray];

    return inputArray;
  }
}

module.exports = PlayerModel;
