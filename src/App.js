const { Random, Console } = require("@woowacourse/mission-utils");
const { GAME_START_MESSAGE } = require("./constants/message.js");
const {
  MAX_NUMBER_LENGTH,
  MAX_NUMBER_RANGE,
  MIN_NUMBER_RANGE,
} = require("./constants/condition.js");

class App {
  constructor() {
    Console.print(GAME_START_MESSAGE);
    this.computerInput = this.generateComputerInput();
  }

  play() {}

  generateComputerInput() {
    let randomNum = new Set();
    while (randomNum.size !== MAX_NUMBER_LENGTH) {
      randomNum.add(Random.pickNumberInRange(MIN_NUMBER_RANGE, MAX_NUMBER_RANGE));
    }

    return [...randomNum].join("");
  }
}

const app = new App();
app.play();

module.exports = App;
