const MissionUtils = require('@woowacourse/mission-utils');
const { message } = require('prompt');
const { Console, Random } = MissionUtils;
const error = require('./Error');

class Interaction {
  constructor() {
    this.answer;
  }

  printtMessage(message) {
    Console.print(message);
  }

  printPlayInputMessage() {
    return new Promise(this.handleReadLine('숫자를 입력해주세요. :'));
  }

  printEndGameMEssage() {
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
    return new Promise((resolve, reject) => {
      if (!error.isValidResponse(inputNumber)) {
        throw new Error('숫자 세자리이상');
      }

      resolve(inputNumber);
    });
  }
}

module.exports = Interaction;
