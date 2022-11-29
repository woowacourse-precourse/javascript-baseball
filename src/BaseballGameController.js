const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

const BaseballGameController = {
  startGame(baseballGame) {
    this.baseballGame = baseballGame;
    OutputView.printStart();
    this.baseballGame.makeAnswerNumber();
  },

  readUserNumber() {
    InputView.readUserNumber();
  },
};

module.exports = BaseballGameController;
