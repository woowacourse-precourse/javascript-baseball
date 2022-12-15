const GameView = require('./GameView');

class CarView extends GameView {
  inputCarNameList() {
    this.inputView.inputCarNameList();
  }

  inputTrailCnt() {
    this.inputView.inputTrailCnt();
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
