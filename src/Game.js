const MissionUtils = require('@woowacourse/mission-utils');

class Game {
  #computerNumber;

  #userNumber;

  #strike;

  #ball;

  constructor(computerNumber) {
    this.#computerNumber = computerNumber;
    this.#userNumber = null;
    this.#strike = 0;
    this.#ball = 0;
  }

  compareNumbers() {
    this.setBall(0);
    this.setStrike(0);

    const computerNumber = this.getComputerNumber();
    const userNumber = this.getUserNumber();
    const notStrikePositions = [];
    const notStrikeNumbers = {};

    [...computerNumber].forEach((number, index) => {
      if (number === userNumber[index]) {
        this.setStrike(this.getStrike() + 1);
        return;
      }
      if (notStrikeNumbers[number] === undefined) {
        notStrikeNumbers[number] = 0;
      }

      notStrikeNumbers[number] += 1;
      notStrikePositions.push(index);
    });

    notStrikePositions.forEach((position) => {
      if (notStrikeNumbers[userNumber[position]] === 0) return;
      if (notStrikeNumbers[userNumber[position]] === undefined) return;

      notStrikeNumbers[userNumber[position]] -= 1;
      this.setBall(this.getBall() + 1);
    });

    return [this.getBall(), this.getStrike()];
  }

  printCompareResult() {
    if (this.getBall() === 0 && this.getStrike() === 0) {
      MissionUtils.Console.print('낫싱');
      return;
    }
    if (this.getBall() === 0 && this.getStrike() !== 0) {
      MissionUtils.Console.print(`${this.getStrike()}스트라이크`);
      return;
    }

    if (this.getBall() !== 0 && this.getStrike() === 0) {
      MissionUtils.Console.print(`${this.getBall()}볼`);
      return;
    }

    MissionUtils.Console.print(
      `${this.getBall()}볼 ${this.getStrike()}스트라이크`
    );
  }

  setUserNumber(number) {
    this.#userNumber = number;
  }

  getUserNumber() {
    return this.#userNumber;
  }

  setComputerNumber(number) {
    this.#computerNumber = number;
  }

  getComputerNumber() {
    return this.#computerNumber;
  }

  setBall(ball) {
    this.#ball = ball;
  }

  getBall() {
    return this.#ball;
  }

  setStrike(strike) {
    this.#strike = strike;
  }

  getStrike() {
    return this.#strike;
  }
}

module.exports = Game;
