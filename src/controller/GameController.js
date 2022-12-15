const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
const { GAME_STATE } = require('../constants/values');
const ComputerAnswer = require('../models/ComputerAnswer');
const UserAnswer = require('../models/UserAnswer');
const ResultCalculator = require('../models/ResultCalculator');
const UserSelect = require('../models/UserSelect');

class GameController {
  #instance = {
    computerAnswer: null,
    userAnswer: null,
    resultCalculator: null,
    userSelect: null,
  };

  constructor() {
    OutputView.printStartMessage();
    this.#initGame();
  }

  #initGame() {
    this.#instance = {
      computerAnswer: new ComputerAnswer(),
      userAnswer: new UserAnswer(),
      resultCalculator: new ResultCalculator(),
      userSelect: new UserSelect(),
    };
  }

  playGame() {
    this.#instance.computerAnswer.generate();

    InputView.readAnswers(this.#setAnswers.bind(this));
  }

  #setAnswers(number) {
    this.#instance.resultCalculator.clear();
    this.#instance.userAnswer.set(number);
    if (!this.#instance.userAnswer.checkAnswer()) {
      InputView.readAnswers(this.#setAnswers.bind(this));
      return;
    }

    this.#matchAnswer();
  }

  #matchAnswer() {
    this.#instance.resultCalculator.compareAnswers(
      this.#instance.computerAnswer.get(),
      this.#instance.userAnswer.get()
    );

    this.#displayResult();
  }

  #displayResult() {
    OutputView.printResult(this.#instance.resultCalculator.get());

    this.#checkGameState();
  }

  #checkGameState() {
    if (this.#instance.resultCalculator.get().state === GAME_STATE.PLAYING) {
      InputView.readAnswers(this.#setAnswers.bind(this));
      return;
    }

    OutputView.printStopGame();

    InputView.readSelect(this.#setGameState.bind(this));
  }

  #setGameState(select) {
    this.#instance.userSelect.set(select);
    if (this.#instance.userSelect.get() === GAME_STATE.PLAYING) {
      this.playGame();
      return;
    }

    this.#endGame();
  }

  #endGame() {
    OutputView.printEndGame();
    InputView.close();
  }
}

module.exports = GameController;
