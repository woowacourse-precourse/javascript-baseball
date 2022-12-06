const MissionUtils = require('@woowacourse/mission-utils');
const Validator = require('./Validator');

class GameInput {
  // eslint-disable-next-line class-methods-use-this
  static userSwing(callback) {
    MissionUtils.Console.readLine('숫자를 입력하세요', answer => {
      Validator.userInput(answer);
      callback([...answer]);
    });
  }
}

module.exports = GameInput;
