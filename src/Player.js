const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('./constants/message');

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
    Console.readLine(MESSAGE.GAME.INPUT, callback);
  }
}

module.exports = Player;
