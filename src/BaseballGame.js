const { REPLAY, CLOSE, STRIKE_OUT, INVALID } = require("./Constant");
const MissionUtils = require("@woowacourse/mission-utils");
const Computer = require("./Computer");
const User = require("./User");
const ExceptionHandler = require("./ExceptionHandler");

class BaseballGame {
  constructor() {
    this.ball = 0;
    this.strike = 0;

    this.computer = new Computer();
    this.user = new User();
    this.exceptionHandler = new ExceptionHandler();
  }

  firstPlay() {
    this.greeting();
    this.computer.makeRandomNumberArray();
    this.inputUserAnswer();
  }

  replay() {
    this.computer.makeRandomNumberArray();
    this.inputUserAnswer();
  }

  greeting() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  inputUserAnswer() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.user.saveUserInput(answer);

      this.exceptionHandler.checkUserInputLength(answer);
      this.exceptionHandler.checkUserInputRedundancy(answer);
      this.exceptionHandler.checkInvalidNumber(answer);

      this.checkBall(this.computer.computerRandomNumberArray, this.user.userAnswer);
      this.checkStrike(this.computer.computerRandomNumberArray, this.user.userAnswer);
      this.printBallStrike();
    });
  }

  checkBall(computerRandomNumberArray, userAnswer) {
    userAnswer.split("").forEach((digit, index) => {
      if (
        computerRandomNumberArray.includes(parseInt(digit)) &&
        computerRandomNumberArray.indexOf(parseInt(digit)) !== index
      )
        this.ball++;
    });
  }

  checkStrike(computerRandomNumberArray, userAnswer) {
    userAnswer.split("").forEach((digit, index) => {
      if (
        computerRandomNumberArray.includes(parseInt(digit)) &&
        computerRandomNumberArray.indexOf(parseInt(digit)) === index
      )
        this.strike++;
    });
  }

  initializeBallandStrike() {
    this.ball = 0;
    this.strike = 0;
  }

  gameContinueorEnd(strike) {
    if (strike === STRIKE_OUT) {
      this.initializeBallandStrike();

      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.askReplayorClose();
    } else {
      this.initializeBallandStrike();
      this.inputUserAnswer();
    }
  }

  printBallStrike() {
    if (this.ball === INVALID && this.strike !== INVALID) {
      MissionUtils.Console.print(`${this.strike}스트라이크`);
    } else if (this.strike === INVALID && this.ball !== INVALID) {
      MissionUtils.Console.print(`${this.ball}볼`);
    } else if (this.strike !== INVALID && this.ball !== INVALID) {
      MissionUtils.Console.print(`${this.ball}볼 ${this.strike}스트라이크`);
    } else {
      MissionUtils.Console.print("낫싱");
    }

    this.gameContinueorEnd(this.strike);
  }

  askReplayorClose() {
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (answer) => {
      this.exceptionHandler.checkValidInput(answer);

      if (answer == CLOSE) {
        MissionUtils.Console.close();
      } else if (answer == REPLAY) {
        this.replay();
      } else throw new Error();
    });
  }
}

module.exports = BaseballGame;
