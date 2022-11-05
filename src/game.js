const MissionUtils = require('@woowacourse/mission-utils');
const { RANDOM_NUMBER, SCORE, GAME } = require('./constants');
const { MESSAGE } = require('./constants');

class Game {
  constructor() {
    this.isReplay = false;
    this.randomNumbers;
  }

  play() {
    this.init();
    this.playRound(this.randomNumbers);
  }

  init() {
    if (!this.isReplay) this.print(MESSAGE.START);
    this.randomNumbers = this.generateRandomNumber(1, 9, 3);
  }

  print(message) {
    MissionUtils.Console.print(message);
  }

  generateRandomNumber(min, max, length) {
    this.randomNumbers = [];

    while (this.randomNumbers.length < length) {
      const number = MissionUtils.Random.pickNumberInRange(min, max);
      if (!this.randomNumbers.includes(number)) {
        this.randomNumbers.push(number);
      }
    }

    console.log(this.randomNumbers);

    return this.randomNumbers;
  }

  playRound(random) {
    MissionUtils.Console.readLine(MESSAGE.ENTER_NUMBER, (inputs) => {
      const input = inputs.split(' ').join('');
      const inputNumbers = [...input].map(Number);
      const { ball, strike } = this.countScore(inputNumbers, random);

      this.isValidInputNumber(input, RANDOM_NUMBER.RANGE);

      this.printScore(ball, strike);

      if (strike === 3) {
        this.isReplay = true;
        this.print(MESSAGE.SUCCESS);

        return this.askPlayAgain();
      }

      return this.playRound(random);
    });
  }

  countScore(inputNumbers, randomNumbers) {
    let ball = 0;
    let strike = 0;

    inputNumbers.forEach((inputNum, inputIdx) => {
      if (inputNum === randomNumbers[inputIdx]) {
        strike++;
      } else if (randomNumbers.includes(inputNum)) {
        ball++;
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

    MissionUtils.Console.print(score);
  }

  askPlayAgain() {
    MissionUtils.Console.readLine(MESSAGE.RESTART, (answers) => {
      const answer = Number(answers.trim());
      if (answer === GAME.START) {
        return this.play();
      }

      if (answer === GAME.END) {
        return MissionUtils.Console.close();
      }

      throw new Error('1 또는 2를 입력해주세요');
    });
  }

  isValidInputNumber(numbers, validRange) {
    const diversityOfNum = [...new Set(numbers)].length;

    if (
      numbers.length !== 3 ||
      !validRange.test(numbers) ||
      diversityOfNum !== 3
    ) {
      throw new Error('1부터 9까지 서로 다른 숫자 3개를 입력해주세요');
    }
  }
}

module.exports = Game;
