const { GAME_STATE } = require('../constants/values');

class ResultCalculator {
  #result = {
    ball: 0,
    strike: 0,
    state: GAME_STATE.PLAYING,
  };

  constructor() {
    this.#initResult();
  }

  #initResult() {
    this.#result = {
      ball: 0,
      strike: 0,
      state: GAME_STATE.PLAYING,
    };
  }

  clear() {
    this.#initResult();
  }

  compareAnswers(computerAnswers, userAnswers) {
    this.#countStrike(computerAnswers, userAnswers);
    this.#countBall(computerAnswers, userAnswers);
    this.#checkGameState();
  }

  #countStrike(computerAnswers, userAnswers) {
    computerAnswers.forEach((number, i) => {
      if (i === userAnswers.indexOf(number)) {
        this.#result.strike += 1;
      }
    });
  }

  #countBall(computerAnswers, userAnswers) {
    let wholeCount = 0;

    computerAnswers.forEach(number => {
      if (userAnswers.includes(number)) {
        wholeCount += 1;
      }
    });
    this.#result.ball = wholeCount - this.#result.strike;
  }

  #checkGameState() {
    if (this.#result.strike === 3) {
      this.#result.state = GAME_STATE.STOP;
    }
  }

  get() {
    return this.#result;
  }
}

module.exports = ResultCalculator;
