const MissionUtils = require("@woowacourse/mission-utils");
const printMessage = require("./PrintMessage.js");
const generateRandNum = require("./GenerateRandomNumber");
const exception = require("./HandleException.js");

class App {
  constructor() {
    this.userNum;
    this.computerNum;
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
      exception.handleException(this.userNum);
      this.getCompareResult();
    });
  }

  getCompareResult() {
    let ball = 0, strike = 0;
    ball = this.getNumOfBall(ball);
    strike = this.getNumOfStrike(strike);
    printMessage.printBallAndStrike(ball, strike);
    if(strike === 3) {
      printMessage.printGameWin();
      this.gameRestartOrEnd();
    }
    else{
      this.getUserInputNum();
    }
  }

  getNumOfBall(ball) {
    for(let i = 0; i < this.computerNum.length; i++) {
      ball += this.isBall(i);
    }
    return ball;
  }

  isBall(compareIter){
    for(let i = 0; i < this.computerNum.length; i++) {
      if((compareIter !== i) && (this.computerNum[compareIter] == this.userNum[i])) {
          return 1;
      }
    }
    return 0;
  }

  getNumOfStrike(strike) {
    for(let i = 0; i < this.computerNum.length; i++) {
      if(this.computerNum[i] == this.userNum[i]) {
          strike++;
      }
    }
    return strike;
  }

  gameRestartOrEnd() {
    const GAME_CONTINUE_MESSAGE = "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";
    MissionUtils.Console.readLine(GAME_CONTINUE_MESSAGE, userInput => {
      if(userInput == 1) {
        this.play();
      }
      else if(userInput == 2) {
        MissionUtils.Console.close();
      }
      else{
        throw new Error("1 또는 2가 입력되지 않았습니다.")
      }
    });
  }
}
const app = new App();
app.play();

module.exports = App;
