const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;
const MESSAGE = require('./Message');
const error = require('./Error');

class Interaction {
  constructor() {
    this.answer;
  }

  printPlayInputMessage() {
    return new Promise(this.handleReadLine('숫자를 입력해주세요. :'));
  }

  printEndGameMessage() {
    return new Promise(this.handleReadLine('그만하시겠습니까? :'));
  }

  handleReadLine(message) {
    return (resolve) => {
      Console.readLine(message, (input) => {
        resolve(input);
        return input;
      });
    };
  }

  checkValidNumberInput(inputNumber) {
    if (!error.isValidResponse(inputNumber)) {
      Console.close();
      throw new Error(MESSAGE.ERROR);
    }
  }
}

module.exports = Interaction;
