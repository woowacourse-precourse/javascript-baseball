const MissionUtils = require("@woowacourse/mission-utils");
const printMessage = require("./PrintMessage.js");
const generateRandNum = require("./GenerateRandomNumber");
const exception = require("./HandleException.js");

const GAME_RESTART = '1';
const GAME_END = '2';
const REQUEST_USER_INPUT_MESSAGE = "숫자를 입력해주세요 : ";
const GAME_CONTINUE_MESSAGE = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";

printMessage.printGameStart();

class App {
  constructor() {
    this.userNum = "";
    this.computerNum = "";
  }

  play() {
    this.GenerateComputerNum();
    this.getUserInputNum();
  }

  GenerateComputerNum() {
    this.computerNum = generateRandNum.generateComputerNum();
  }

  getUserInputNum() {
    MissionUtils.Console.readLine(REQUEST_USER_INPUT_MESSAGE, (userInput) => {
      this.userNum = userInput;
      exception.handleException(this.userNum);
      this.getCompareResult();
    });
  }

  getCompareResult() {
    let ball = 0, strike = 0;
    strike = this.getNumOfStrike();
    ball = this.getNumOfBall(strike);
    printMessage.printBallAndStrike(ball, strike);
    if(strike === 3) {
      printMessage.printGameWin();
      this.gameRestartOrEnd();
    }
    else{
      this.getUserInputNum();
    }
  }

  getNumOfStrike() {
    let numOfStrike = 0;
    for(let i = 0; i < this.computerNum.length; i++) {
      if(this.computerNum[i] === this.userNum[i]) {
          numOfStrike++;
      }
    }
    return numOfStrike;
  }

  getNumOfBall(numOfStrike) {
    let numOfBall = 0;
    for(let i = 0; i < this.computerNum.length; i++) {
      if(this.userNum.includes(this.computerNum[i])){
        numOfBall++;
      }
    }
    return numOfBall - numOfStrike;
  }

  gameRestartOrEnd() {
    MissionUtils.Console.readLine(GAME_CONTINUE_MESSAGE, userInput => {
      if(userInput === GAME_RESTART) {
        this.play();
      }
      else if(userInput === GAME_END) {
        MissionUtils.Console.close();
      }
      else{
        throw new Error("1 또는 2가 입력되지 않았습니다.");
      }
    });
  }
}
const app = new App();
app.play();

module.exports = App;
