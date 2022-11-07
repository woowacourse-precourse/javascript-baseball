const { Random } = require('@woowacourse/mission-utils');

const { NUMBER_LENGTH, HINTS, MESSAGES } = require('./lib/constants');

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
    const playerNumbers = Computer.parseInput(input);

    if (!Computer.isValid(playerNumbers)) {
      throw new Error(MESSAGES.ERROR);
    }

    const numberOfBall = this.countBall(playerNumbers);
    const numberOfStrike = this.countStrike(playerNumbers);

    return {
      numberOfStrike,
      hintString: Computer.makeHintString({ numberOfBall, numberOfStrike }),
    };
  }

  static parseInput(input) {
    const trimmedInput = input.trim();
    const numbers = [...trimmedInput].map(Number);

    return numbers;
  }

  static isValid(numbers) {
    if (numbers.some(number => Number.isNaN(number))) {
      return false;
    }

    if (numbers.length !== NUMBER_LENGTH) {
      return false;
    }

    if (numbers.includes(0)) {
      return false;
    }

    if (new Set(numbers).size !== NUMBER_LENGTH) {
      return false;
    }

    return true;
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

  static makeHintString({ numberOfBall, numberOfStrike }) {
    const hint = [];

    if (numberOfBall) {
      hint.push(HINTS.BALL(numberOfBall));
    }
    if (numberOfStrike) {
      hint.push(HINTS.STRIKE(numberOfStrike));
    }

    return hint.length ? hint.join(' ') : HINTS.NOTHING;
  }
}

module.exports = Computer;
