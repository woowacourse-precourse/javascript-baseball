const MissionUtils = require('@woowacourse/mission-utils');
const messages = require('./Constants.js');
class App {
  play() {
    this.printGameStartMessage();
    this.init();
  }

  init() {
    this.computerNumber = this.createComputerNumber();
  }

  printGameStartMessage() {
    MissionUtils.Console.print(messages.GAME_START_MESSAGE);
  }

  createComputerNumber() {
    let computerNumber = '';
    while (computerNumber.length !== 3) {
      let digit = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumber.includes(digit)) computerNumber += digit;
    }
    return Number(computerNumber);
  }
}

module.exports = App;
