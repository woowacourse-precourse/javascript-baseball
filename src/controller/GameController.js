const InputView = require("../InputView");
const OutputView = require("../OutputView");
const GameModel = require("../models/GameModel");

class GameController {
  #gameModel;

  constructor() {
    OutputView.printStartText();
    this.#gameModel = new GameModel();
  }

  onInputRecrusive(inputFunc, callback) {
    inputFunc((input) => {
      try {
        callback(input);
      } catch (e) {
        OutputView.printMessage(e);
      }
    });
  }

  onInputNumbers() {
    this.onInputRecrusive(
      InputView.readNumbers,
      this.inputNumbersCallback.bind(this)
    );
  }

  inputNumbersCallback(input) {
    OutputView.printMessage(this.#gameModel.onGame(input));

    if (this.#gameModel.getGameStatus()) {
      OutputView.printEndText();
      this.onInputRetry();
      return;
    }

    return this.onInputNumbers();
  }

  onInputRetry() {
    this.onInputRecrusive(InputView.readRetry, this.retryCallback.bind(this));
  }

  retryCallback(input) {
    if (this.#gameModel.isRetry(Number(input))) {
      this.#gameModel.initGame();
      return this.onInputNumbers();
    }

    InputView.endGame();
  }
}

module.exports = GameController;
