const GameView = require('./GameView');

class CarView extends GameView {
  // retryWhenError: 에러 발생 시 에러 문구 출력 후 재시작
  #retryWhenError(callerFunction, callback) {
    return input => {
      try {
        callback(input);
      } catch (error) {
        this.#errorHandler(error);
        callerFunction(callback);
      }
    };
  }

  // closeWhenError: 에러 발생 시 에러 문구 출력 후 종료
  #closeWhenError(callback) {
    return input => {
      try {
        callback(input);
      } catch (error) {
        this.#errorHandler(error);
        this.outputView.close();
      }
    };
  }

  #errorHandler(error) {
    console.log(error.message);
  }

  inputCarNameList(callback) {
    this.inputView.inputCarNameList(
      this.#retryWhenError(this.inputCarNameList.bind(this), callback),
      // this.#closeWhenError(callback),
    );
  }

  inputTrailCnt(callback) {
    this.inputView.inputTrailCnt(this.#retryWhenError(this.inputTrailCnt.bind(this), callback));
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
