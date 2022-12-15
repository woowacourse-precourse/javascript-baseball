const random = require('../utils/random');

class ComputerAnswer {
  #answers;

  constructor() {
    this.#initAnswers();
  }

  #initAnswers() {
    this.#answers = [];
  }

  generate() {
    this.#initAnswers();
    let number = 0;
    while (this.#answers.length < 3) {
      number = random.pickNumberInRange();
      if (!this.#answers.includes(number)) {
        this.#answers.push(number);
      }
    }
  }

  get() {
    return this.#answers;
  }
}

module.exports = ComputerAnswer;
