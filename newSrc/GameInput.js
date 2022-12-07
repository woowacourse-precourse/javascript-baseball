const MissionUtils = require('@woowacourse/mission-utils');
const { Message } = require('./Constant');
const Validator = require('./Validator');

class GameInput {
  // eslint-disable-next-line class-methods-use-this
  static userSwing(callback) {
    MissionUtils.Console.readLine(Message.INPUT, answer => {
      Validator.userInput(answer);
      callback([...answer]);
    });
  }

  static reStartQuestion(callback) {
    MissionUtils.Console.readLine(Message.RESTART, answer => {
      // Validator.restart(answer)
      callback(answer);
    });
  }
}

module.exports = GameInput;
