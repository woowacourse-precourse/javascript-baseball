const validator = require('../utils/validator');
const OutputView = require('../views/OutputView');

class UserAnswer {
  #answers;

  constructor() {
    this.#initAnswers();
  }

  #initAnswers() {
    this.#answers = [];
  }

  set(number) {
    this.#answers = [...number].map(value => parseInt(value, 10));
  }

  checkAnswer() {
    if (!this.#checkAnswers()) {
      this.#initAnswers();
      return false;
    }

    return true;
  }

  #checkAnswers() {
    try {
      this.#validateAnswers();
    } catch (error) {
      OutputView.printError(error);
      return false;
    }

    return true;
  }

  #validateAnswers() {
    validator.checkTruthy(this.#answers);
    validator.checkTypeOfArray(this.#answers);
    validator.checkArrayLength(this.#answers);
    this.#answers.forEach(number => {
      validator.checkTypeOfNumber(number);
      validator.checkNumberRange(number);
    });
    validator.checkUniqueNumber(this.#answers);
  }

  get() {
    return this.#answers;
  }
}

module.exports = UserAnswer;
