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
      printMessage.printGameWin();
      this.gameWin();
    }
    else{
      this.getUserInputNum();
    }
  }

  getNumOfBall() {
    for(let i = 0; i < computerNum.length; i++) {
      if(this.userNum.includes(this.computerNum[i])){
        ball++;
      }
    }
  }

  getNumOfStrike() {
    for(let i = 0; iter < computerNum.length; i++) {
      if(computerNum[i] == userNum[i]) {
          strike++;
      }
    }
  }

  gameRestartOrEnd() {
    const GAME_CONTINUE_MESSAGE = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";
    MissionUtils.Console.readLine(GAME_CONTINUE_MESSAGE, userInput => {
    });
  }
}

module.exports = App;
