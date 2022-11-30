const { Console } = require('@woowacourse/mission-utils');
const { BASEBALL } = require('./constants/Constants');
const BaseballGame = require('./BaseballGame');
const OutputView = require('./view/OutputView');

const BaseballGameController = {
  start() {
    this.baseballGame = new BaseballGame();
    OutputView.printStart();
  },

  checkResult(userNumberArray) {
    this.hint(userNumberArray);
    if (this.baseballGame.isThreeStrike(userNumberArray)) {
      return true;
    }
    return false;
  },

  hint(userNumberArray) {
    const HINT_MESSAGE = this.baseballGame.getHint(userNumberArray);
    OutputView.printHintMessage(HINT_MESSAGE);
  },

  threeStrike() {
    OutputView.printThreeStrike();
  },

  checkCommandResult(command) {
    if (command === BASEBALL.RETRY) {
      return true;
    }
    if (command === BASEBALL.END) {
      return false;
    }
  },

  end() {
    Console.close();
  },
};

module.exports = BaseballGameController;
