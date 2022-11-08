const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
const { GAME_MESSAGE } = require("./constants");
const setRandomNumber = require("./utils/setRandomNumber");

class App {
  play() {
    Console.print(GAME_MESSAGE.START);
    this.generateComputerInput();
  }

  generateComputerInput() {
    const randomNumber = setRandomNumber();

    return randomNumber;
  }
}

module.exports = App;
