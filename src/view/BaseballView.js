const { Console } = require('@woowacourse/mission-utils');
const GameView = require('./GameView');

const BaseballView = class extends GameView {
  constructor(inputView, outputView) {
    super();
    this.inputView = inputView;
    this.outputView = outputView;
  }

  errorHandler(error) {
    Console.close();
  }

  inputUserCommand(callback) {
    this.inputView.inputUserCommand(this.errorBoundary(this.inputUserCommand.bind(this), callback));
  }

  askUserToRestart(callback) {
    this.inputView.askUserToRestart(this.errorBoundary(this.askUserToRestart.bind(this), callback));
  }

  renderGameStartCommand() {
    this.outputView.renderGameStartCommand();
  }

  renderGameResult() {
    this.outputView.renderGameResult();
  }

  renderGameEndCommand() {
    this.outputView.renderGameEndCommand();
  }
};

module.exports = BaseballView;
