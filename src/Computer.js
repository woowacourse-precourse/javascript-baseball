const { Random } = require('@woowacourse/mission-utils');

const { NUMBER_LENGTH, MESSAGES } = require('./lib/constants');
const {
  makeHintString,
  parseInputToNumberArray,
  isValidNumber,
} = require('./lib/utils');

class Computer {
  #numbers;

  constructor() {
    const numbers = [];
    while (numbers.length < NUMBER_LENGTH) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    this.#numbers = numbers;
  }

  processInput(input) {
    const playerNumbers = parseInputToNumberArray(input);

    if (!isValidNumber(playerNumbers)) {
      throw new Error(MESSAGES.ERROR);
    }

    const numberOfBall = this.countBall(playerNumbers);
    const numberOfStrike = this.countStrike(playerNumbers);

    return {
      numberOfStrike,
      hintString: makeHintString({ numberOfBall, numberOfStrike }),
    };
  }

  countBall(playerNumbers) {
    return playerNumbers.filter((number, index) => {
      return this.#numbers[index] !== number && this.#numbers.includes(number);
    }).length;
  }

  countStrike(playerNumbers) {
    return playerNumbers.filter((number, index) => {
      return this.#numbers[index] === number;
    }).length;
  }
}

module.exports = Computer;
