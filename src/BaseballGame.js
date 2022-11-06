const { REPLAY, CLOSE } = require("./Constant");
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

      this.exceptionHandler.checkUserInputRedundancy(answer);

      if (this.exceptionHandler.checkUserInputLength(answer)) {
        this.checkBallStrike(this.computer.computerRandomNumberArray, this.user.userAnswer);
        this.printBallStrike();
      }
    });
  }

  checkBallStrike(computerRandomNumberArray, userAnswer) {
    for (let i = 0; i < userAnswer.length; i++) {
      if (
        computerRandomNumberArray.includes(parseInt(userAnswer[i])) &&
        computerRandomNumberArray[i] == userAnswer[i]
      ) {
        this.strike++;
      } else if (
        computerRandomNumberArray.includes(parseInt(userAnswer[i])) &&
        computerRandomNumberArray[i] != userAnswer[i]
      ) {
        this.ball++;
      }
    }
  }

  initializeBallandStrike() {
    this.ball = 0;
    this.strike = 0;
  }

  gameContinueorEnd(strike) {
    if (strike === 3) {
      this.initializeBallandStrike();

      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.askReplayorClose();
    } else {
      this.initializeBallandStrike();
      this.inputUserAnswer();
    }
  }

  printBallStrike() {
    if (this.ball === 0 && this.strike !== 0) {
      MissionUtils.Console.print(`${this.strike}스트라이크`);
    } else if (this.strike === 0 && this.ball !== 0) {
      MissionUtils.Console.print(`${this.ball}볼`);
    } else if (this.strike !== 0 && this.ball !== 0) {
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
