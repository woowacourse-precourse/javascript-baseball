const { Random, Console } = require('./common/common');
const {
  START_MESSAGE,
  END_MESSAGE,
  INPUT_MESSGAE,
  MAX_LENGTH,
  START_NUM,
  END_NUM,
} = require('./common/constants');

class App {
  constructor() {
    this.randomNumbers = [];
  }

  startGame() {
    Console.print(START_MESSAGE);
    this.makeRandomNumber();
  }

  makeRandomNumber() {
    while (this.randomNumbers.length < MAX_LENGTH) {
      let number = Random.pickNumberInRange(START_NUM, END_NUM);
      if (!this.randomNumbers.includes(number)) {
        this.randomNumbers.push(number);
      }
    }
  }

  play() {
    this.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
