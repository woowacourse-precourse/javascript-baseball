const MissionUtils = require('@woowacourse/mission-utils');
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

  setValue() {
    MissionUtils.Console.readLine(MESSAGE.GAME.INPUT, (answer) => {
      if (isAvailableValue(answer)) {
        this.#value = answer + '';
        this.referee.gameResult();
      } else throw new Error(MESSAGE.ERROR.WRONG_VALUE);
    });
  }
}

module.exports = Player;
