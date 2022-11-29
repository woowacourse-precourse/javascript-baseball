const BaseballGame = require('./BaseballGame');
const inputView = require('./View/InputView');
const OutputView = require('./View/OutputView');

class BaseballController {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  inputManager(input) {
    return OutputView.gameResult(this.baseballGame.play(input));
  }
}

module.exports = BaseballController;