const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('./constants/message');
const isAvailableValue = require('./utils/isAvailableValue');

class Player {
  #value;
  constructor() {
    this.#value = '';
  }

  getValue() {
    return this.#value;
  }

  setValue(value) {
    this.#value = value;
  }

  readInput(callback) {
    Console.readLine(MESSAGE.GAME.INPUT, (answer) => {
      if (isAvailableValue(answer)) this.setValue(answer);
      else throw new Error(MESSAGE.ERROR.WRONG_VALUE);

      return callback();
    });
  }
}

module.exports = Player;
