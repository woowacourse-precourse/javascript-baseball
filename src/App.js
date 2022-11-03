const MissionUtils = require("@woowacourse/mission-utils");
const message = require("./constants/message.js");
const condition = require("./constants/condition.js");

class App {
  constructor() {
    MissionUtils.Console.print(message.GAME_START);
    this.computerInput = this.generateComputerInput();
  }

  play() {}

  generateComputerInput() {
    let randomNum = new Set();
    while (randomNum.size !== condition.MAX_NUMBER_LENGTH) {
      randomNum.add(
        MissionUtils.Random.pickNumberInRange(
          condition.MIN_NUMBER_RANGE,
          condition.MAX_NUMBER_RANGE
        )
      );
    }

    return [...randomNum].join("");
  }
}

const app = new App();
app.play();

module.exports = App;
