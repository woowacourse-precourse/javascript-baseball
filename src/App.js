const inputValidation = require('./validation/validation.js');
const TEXT = require('./constants/constants.js');
const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.correctAnswer = false;
    this.init();
  }

  init() {
    this.print(TEXT.START_MESSAGE);
  }

  play() {
    this.computer = this.creatRandomNumber();
    this.gameProgress();
  }

  gameProgress() {
    this.readLine(TEXT.ENTER_NUMBER, (input) => {
      inputValidation(input)
        ? this.compareResult(this.compare(input, this.computer))
        : this.gameClose(TEXT.ERROR_MESSAGE);
    });
  }

  print(message) {
    return MissionUtils.Console.print(message);
  }

  readLine(message, callback) {
    return MissionUtils.Console.readLine(message, callback);
  }

  gameClose(message = null) {
    if (message) {
      throw message;
    } else {
      return MissionUtils.Console.close();
    }
  }

  finish() {
    this.print(TEXT.FINISH_MESSAGE);
    this.readLine('', (input) => {
      if (Number(input) === 1) {
        this.correctAnswer = false;
        this.play();
      } else if (Number(input) === 2) {
        this.gameClose();
      } else {
        this.gameClose(TEXT.ERROR_MESSAGE);
      }
    });
  }

  compareResult(message) {
    this.print(message);
    if (this.correctAnswer) {
      this.finish();
    } else {
      this.gameProgress();
    }
  }

  compare(input, computer) {
    const strike = this.compareStrike(input, computer);
    const ball = this.compareBall(input, computer);
    if (strike === 3) {
      this.correctAnswer = true;
      return `${strike}${TEXT.STRIKE}`;
    } else if (!strike && !ball) {
      return TEXT.NOTHING;
    } else if (strike && ball) {
      return `${ball}${TEXT.BALL} ${strike}${TEXT.STRIKE}`;
    } else if (strike && !ball) {
      return `${strike}${TEXT.STRIKE}`;
    } else if (!strike && ball) {
      return `${ball}${TEXT.BALL}`;
    }
  }

  compareStrike(input, computer) {
    return computer.filter((value, index) => value === Number(input[index]))
      .length;
  }

  compareBall(input, computer) {
    return computer.filter(
      (value, index) =>
        value !== Number(input[index]) &&
        computer.includes(Number(input[index]))
    ).length;
  }

  creatRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }
}

const app = new App();
app.play();

module.exports = App;
