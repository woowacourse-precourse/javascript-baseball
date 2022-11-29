const { Console } = require('@woowacourse/mission-utils');
const { BASEBALL } = require('./constants/Constants');
const BaseballGame = require('./BaseballGame');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

const BaseballGameController = {
  start() {
    this.baseballGame = new BaseballGame();
    OutputView.printStart();
  },

  userNumber() {
    InputView.readUserNumber();
  },

  checkResult(userNumberArray) {
    this.hint(userNumberArray);
    if (this.baseballGame.isThreeStrike(userNumberArray)) {
      return this.threeStrike();
    }
    return this.userNumber();
  },

  hint(userNumberArray) {
    const HINT_MESSAGE = this.baseballGame.getHint(userNumberArray);
    OutputView.printHint(HINT_MESSAGE);
  },

  threeStrike() {
    OutputView.threeStrike();
    InputView.readCommand();
  },

  checkCommandResult(command) {
    if (command === BASEBALL.RETRY) {
      return this.start();
    }
    if (command === BASEBALL.END) {
      return this.end();
    }
  },

  end() {
    Console.close();
  },
};

module.exports = BaseballGameController;
