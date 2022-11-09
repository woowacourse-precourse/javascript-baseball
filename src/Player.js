const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('./constants/message');
const isAvailableValue = require('./utils/isAvailableValue');

class Player {
  #value;
  constructor(referee) {
    this.referee = referee;
    this.#value = '';
  }

  getValue() {
    return this.#value;
  }

  setValue(callback) {
    Console.readLine(MESSAGE.GAME.INPUT, callback);
  }
}

module.exports = Player;
