const GameView = require('./GameView');

class CarView extends GameView {
  constructor(inputView, outputView) {
    super();
    this.inputView = inputView;
    this.outputView = outputView;
  }

  inputCarNameList(callback) {
    this.inputView.inputCarNameList(callback);
  }

  inputTrailCnt(callback) {
    this.inputView.inputTrailCnt(callback);
  }

  renderGameStartCommand() {
    this.outputView.renderGameStartCommand();
  }

  renderGameTrailResultCommand(trailResult) {
    this.outputView.renderGameTrailResultCommand(trailResult);
  }

  renderGameWinnerCommand(gameWinner) {
    this.outputView.renderGameWinnerCommand(gameWinner);
  }
}

module.exports = CarView;
