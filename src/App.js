const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
const { GAME_MESSAGE } = require("./constants");
const checkValidation = require("./utils/checkValidation");
const getStrikeBallCount = require("./utils/getStrikeBallCount");
const setRandomNumber = require("./utils/setRandomNumber");

class App {
  computerInput;
  userInput;

  play() {
    Console.print(GAME_MESSAGE.START);
    this.generateComputerInput();
    this.generateUserInput();
  }

  generateComputerInput() {
    this.computerInput = setRandomNumber();

    return this.computerInput;
  }

  generateUserInput() {
    Console.readLine(GAME_MESSAGE.INPUT, (answer) => {
      checkValidation(answer);
      this.userInput = answer;
      this.calculationScore();
    });
  }

  calculationScore() {
    const result = getStrikeBallCount(this.computerInput, this.userInput);
    Console.print(result);
  }
}

module.exports = App;
