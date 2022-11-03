const { Random } = require('@woowacourse/mission-utils');

const RANDOM_NUMBER_COUNT = 3;
const MIN_RANDOM_NUMBER_LIMIT = 1;
const MAX_RANDOM_NUMBER_LIMIT = 9;

class NumberBaseballGameManager {
  computerNumbers;
  isGameOver;

  constructor() {
    this.reset();
  }

  reset() {
    this.computerNumbers = this.generateRandomNumberArray();
    this.isGameOver = false;
  }

  generateRandomNumberArray() {
    const numberSet = new Set();

    while (numberSet.size !== RANDOM_NUMBER_COUNT) {
      numberSet.add(
        Random.pickNumberInRange(
          MIN_RANDOM_NUMBER_LIMIT,
          MAX_RANDOM_NUMBER_LIMIT,
        ),
      );
    }

    return [...numberSet];
  }

  getHint(answer) {
    const [strikeCount, ballCount] = this.getBallCounts(
      this.computerNumbers,
      answer,
    );
    const hintType = this.getHintType(strikeCount, ballCount);

    if (strikeCount === 3) {
      this.isGameOver = true;
    }

    return {
      NOTHING: '낫싱',
      ONLY_BALLS: `${ballCount}볼`,
      ONLY_STRIKES: `${strikeCount}스트라이크`,
      DEFAULT: `${ballCount}볼 ${strikeCount}스트라이크`,
    }[hintType];
  }

  getBallCounts(computerNumbers, answer) {
    const userNumbers = answer
      .split('')
      .map(userNumber => parseInt(userNumber, 10));

    return userNumbers.reduce(
      (prevBallCounts, userNumber, idx) => {
        const [strikeCount, ballCount] = prevBallCounts;

        if (this.isStrike(computerNumbers[idx], userNumber)) {
          return [strikeCount + 1, ballCount];
        }

        if (this.isBall(computerNumbers, userNumber)) {
          return [strikeCount, ballCount + 1];
        }

        return [strikeCount, ballCount];
      },
      [0, 0],
    );
  }

  isStrike(computerNumber, userNumber) {
    return computerNumber === userNumber;
  }

  isBall(computerNumbers, userNumber) {
    return computerNumbers.includes(userNumber);
  }

  getHintType(strikeCount, ballCount) {
    switch (true) {
      case strikeCount === 0 && ballCount === 0:
        return 'NOTHING';
      case strikeCount === 0:
        return 'ONLY_BALLS';
      case ballCount === 0:
        return 'ONLY_STRIKES';
      default:
        return 'DEFAULT';
    }
  }

  get computerNumbers() {
    return this.computerNumbers;
  }

  get isGameOver() {
    return this.isGameOver;
  }
}

module.exports = NumberBaseballGameManager;
