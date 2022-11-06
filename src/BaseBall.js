const { BASEBALL } = require('./utils/constants');

class BaseBall {
  getResultToString(random, input) {
    const inputNumArray = this.#getNumArrayFor(input);
    const ball = this.#countBall(random, inputNumArray);
    const strike = this.#countStrike(random, inputNumArray);

    if (ball === 0 && strike === 0) return `${BASEBALL.NOTHING}`;

    return [this.#getBallToString(ball), this.#getStrikeToString(strike)].join(' ').trim();
  }

  isStrikeOut(random, input) {
    return this.#countStrike(random, this.#getNumArrayFor(input)) === 3;
  }

  #isStrike(randomItem, inputItem) {
    return randomItem === inputItem;
  }

  #countStrike(random, input) {
    return input.filter((inputItem, index) => this.#isStrike(random[index], inputItem)).length;
  }

  #isBall(random, input, numberIndex) {
    const randomItem = random[numberIndex];
    const inputItem = input[numberIndex];

    return !this.#isStrike(randomItem, inputItem) && random.includes(inputItem);
  }

  #countBall(random, input) {
    return input.filter((_, index) => this.#isBall(random, input, index)).length;
  }

  #getStrikeToString(strikeCount) {
    return strikeCount > 0 ? `${strikeCount}${BASEBALL.STRIKE}` : '';
  }

  #getBallToString(ballCount) {
    return ballCount > 0 ? `${ballCount}${BASEBALL.BALL}` : '';
  }

  #getNumArrayFor(input) {
    return input.split('').map((value) => +value);
  }

  /* tho code below are getter functions for only testing private method */

  getIsStrikeResult(randomItem, inputItem) {
    return this.#isStrike(randomItem, inputItem);
  }

  getCountStrikeResult(random, input) {
    return this.#countStrike(random, input);
  }

  getIsBallResult(random, input, numberIndex) {
    return this.#isBall(random, input, numberIndex);
  }

  getCountBallResult(random, input) {
    return this.#countBall(random, input);
  }
}

module.exports = BaseBall;
