const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const BaseballGame = require('./BaseballGame');

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    OutputView.printStart();
    this.baseballGame.makeAnswerNumber();
    InputView.readUserNumber();
  }
}

module.exports = App;
