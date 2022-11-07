const { Console, Random } = require('@woowacourse/mission-utils');
const { RANDOM_NUMBER, SCORE, GAME, ERROR } = require('./constants');
const { MESSAGE } = require('./constants');

class Game {
  constructor() {
    this.isReplay = false;
    this.randomNumbers;
  }

  play() {
    this.init();
    this.getAnswer(this.randomNumbers);
  }

  init() {
    if (!this.isReplay) this.print(MESSAGE.START);
    this.randomNumbers = this.generateRandomNumber(1, 9, 3);
  }

  print(message) {
    return Console.print(message);
  }

  generateRandomNumber(min, max, length) {
    this.randomNumbers = [];

    while (this.randomNumbers.length < length) {
      const number = Random.pickNumberInRange(min, max);
      if (!this.randomNumbers.includes(number)) {
        this.randomNumbers.push(number);
      }
    }

    return this.randomNumbers;
  }

  getAnswer(random) {
    Console.readLine(MESSAGE.ENTER_NUMBER, (input) => {
      const inputNumbers = [...input].map(Number);
      const { ball, strike } = this.countScore(inputNumbers, random);

      this.isValidInputNumber(input, RANDOM_NUMBER.RANGE);
      this.printScore(ball, strike);

      if (strike !== 3) {
        return this.getAnswer(random);
      }

      if (strike === 3) {
        this.isReplay = true;
        this.print(MESSAGE.SUCCESS);

        return this.askPlayAgain();
      }
    });
  }

  countScore(inputNumbers, randomNumbers) {
    let ball = 0;
    let strike = 0;

    inputNumbers.forEach((inputNum, inputIdx) => {
      if (inputNum === randomNumbers[inputIdx]) {
        strike += 1;
      } else if (randomNumbers.includes(inputNum)) {
        ball += 1;
      }
    });

    return { ball, strike };
  }

  printScore(ball, strike) {
    let score;

    if (ball === 0 && strike === 0) {
      score = SCORE.NOTHING;
    }

    if (ball > 0) {
      score = `${ball}${SCORE.BALL}`;
    }

    if (strike > 0) {
      score = `${strike}${SCORE.STRIKE}`;
    }

    if (ball > 0 && strike > 0) {
      score = `${ball}${SCORE.BALL} ${strike}${SCORE.STRIKE}`;
    }

    return Console.print(score);
  }

  askPlayAgain() {
    Console.readLine(MESSAGE.RESTART, (answers) => {
      const answer = Number(answers);

      if (answer === GAME.START) {
        return this.play();
      }

      if (answer === GAME.END) {
        return Console.close();
      }

      throw new Error(ERROR.PRESS_ONE_OR_TWO);
    });
  }

  isValidInputNumber(numbers, validRange) {
    const diversityOfNum = [...new Set(numbers)].length;

    if (
      numbers.length !== 3 ||
      !validRange.test(numbers) ||
      diversityOfNum !== 3
    ) {
      throw new Error(ERROR.ENTER_THREE_NUMBER);
    }
  }
}

module.exports = Game;
