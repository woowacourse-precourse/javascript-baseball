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
  }

  print(message) {
    return MissionUtils.Console.print(message);
  }

  readLine(message, callback) {
    return MissionUtils.Console.readLine(message, callback);
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
