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

  play() {
    this.startGame();
  }

  startGame() {
    Console.print(START_MESSAGE);
    this.initRandomNumbers();
  }

  initRandomNumbers() {
    this.randomNumbers = this.makeRandomNumber();
  }

  makeRandomNumber() {
    const pickedNumbers = [];

    while (pickedNumbers.length < MAX_LENGTH) {
      let number = Random.pickNumberInRange(START_NUM, END_NUM);
      if (!pickedNumbers.includes(number)) {
        pickedNumbers.push(number);
      }
    }

    return [...pickedNumbers];
  }
}

const app = new App();
app.play();

module.exports = App;
