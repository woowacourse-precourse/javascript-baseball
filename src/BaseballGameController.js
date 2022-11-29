const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

const BaseballGameController = {
  start(baseballGame) {
    this.baseballGame = baseballGame;
    OutputView.printStart();
    this.baseballGame.setAnswerNumber();
  },

  userNumber() {
    InputView.readUserNumber();
  },

  checkResult(userNumberArray) {
    if (this.baseballGame.isThreeStrike(userNumberArray)) {
      return;
    }
    return this.hint(userNumberArray);
  },

  hint(userNumberArray) {
    const HINT_MESSAGE = this.baseballGame.getHint(userNumberArray);
    OutputView.printHint(HINT_MESSAGE);
    this.userNumber();
  },
};

module.exports = BaseballGameController;
