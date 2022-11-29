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
};

module.exports = BaseballGameController;
