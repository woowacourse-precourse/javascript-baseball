const MissionUtils = require("@woowacourse/mission-utils");
const printMessage = require("./PrintMessage.js");
const generateComNum = require("./GenerateRandomNumber");
const playGame = require("./PlayBaseball.js");
const exception = require("./HandleException.js");

class App {
  constructor() {
    this.computerNum;
    this.isPlayGame = true;
  }
  play() {
    printMessage.printGameStart();
    this.GenerateComputerNum();
  }
  GenerateComputerNum() {
    this.computerNum = generateComNum.generateComputerNum();
  }
  getUserInputNum() {
    const REQUEST_USER_INPUT_MESSAGE = "숫자를 입력해주세요 : ";
    MissionUtils.Console.readLine(REQUEST_USER_INPUT_MESSAGE, (userInput) => {
      exception.handleException(userInput);
      
    });
  }
}

module.exports = App;
