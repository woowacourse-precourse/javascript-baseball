const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
const { GAME_MESSAGE } = require("./constants");
const checkValidation = require("./utils/checkValidation");
const setRandomNumber = require("./utils/setRandomNumber");

class App {
  computerInput;
  userInput;
  validation;

  play() {
    Console.print(GAME_MESSAGE.START);
    this.generateComputerInput();
  }

  generateComputerInput() {
    this.computerInput = setRandomNumber();
    this.generateUserInput();

    return this.computerInput;
  }

  generateUserInput() {
    Console.readLine(GAME_MESSAGE.INPUT, (answer) => {
      Console.print(`입력 숫자 : ${answer}`);
      this.validation = checkValidation(answer);
      this.userInputs = answer;
    });
  }
}

module.exports = App;
