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
      inputValidation(input);
    });
  }

  print(message) {
    return MissionUtils.Console.print(message);
  }

  readLine(message, callback) {
    return MissionUtils.Console.readLine(message, callback);
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
