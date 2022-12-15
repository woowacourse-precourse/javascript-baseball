const GameView = require('./GameView');

class CarView extends GameView {
  errorHandler(error) {
    console.log(error.message);
  }

  inputCarNameList(callback) {
    this.inputView.inputCarNameList(
      this.retryWhenError(this.inputCarNameList.bind(this), callback),
    );
  }

  inputTrailCnt(callback) {
    this.inputView.inputTrailCnt(this.retryWhenError(this.inputTrailCnt.bind(this), callback));
  }

  renderGameStartCommand() {
    this.outputView.renderGameStartCommand();
  }

  renderGameExecutionResult() {
    this.outputView.renderGameExecutionResult();
  }

  renderGameTrailResultCommand(trailResult) {
    this.outputView.renderGameTrailResultCommand(trailResult);
  }

  renderGameWinnerCommand(gameWinner) {
    this.outputView.renderGameWinnerCommand(gameWinner);
  }
}

module.exports = CarView;
