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

  static reStartQuestion(callback) {
    MissionUtils.Console.readLine(
      '게임을 다시 시작하시겠습니까 다시시작은 1 종료는 2',
      answer => {
        // Validator.restart(answer)
        callback(answer);
      },
    );
  }
}

module.exports = GameInput;
