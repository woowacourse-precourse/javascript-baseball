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
    this.generateUserInput();

    return randomNumber;
  }

  generateUserInput() {
    Console.readLine(GAME_MESSAGE.INPUT, (userInput) => {
      Console.print(`입력 숫자 : ${userInput}`);
    });
  }
}

module.exports = App;
