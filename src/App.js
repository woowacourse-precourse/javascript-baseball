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
  constructor() {}

  startGame() {
    Console.print(START_MESSAGE);
  }

  play() {
    this.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
