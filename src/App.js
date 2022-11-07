const MissionUtils = require("@woowacourse/mission-utils");
const printMessage = require("./PrintMessage.js");
const generateRandNum = require("./GenerateRandomNumber");
const exception = require("./HandleException.js");

class App {
  constructor() {
    this.ball = 0;
    this.strike = 0;
    this.userNum;
    this.computerNum;
    this.isPlayGame = true;
  }

  play() {
    printMessage.printGameStart();
    this.GenerateComputerNum();
    this.getUserInputNum();
  }

  GenerateComputerNum() {
    this.computerNum = generateRandNum.generateComputerNum();
  }

  getUserInputNum() {
    const REQUEST_USER_INPUT_MESSAGE = "숫자를 입력해주세요 : ";
    MissionUtils.Console.readLine(REQUEST_USER_INPUT_MESSAGE, (userInput) => {
      this.userNum = userInput;
      exception.handleException(userNum);
      this.getCompareResult();
    });
  }

  getCompareResult() {
    this.getNumOfBall();
    this.getNumOfStrike();
    printMessage.printBallAndStrike(ball, strike);
    if(strike === 3) {
      this.gameWin();
    }
  }

  getNumOfStrike() {
    for(let i = 0; iter < computerNum.length; i++) {
      if(computerNum[i] == userNum[i]) {
          strike++;
      }
    }
  }

  getNumOfBall() {
    for(let i = 0; i < computerNum.length; i++) {
      if(this.userNum.includes(this.computerNum[i])){
        ball++;
      }
    }
  }
}

module.exports = App;
