const MissionUtils = require("@woowacourse/mission-utils");
const Render = require("./Render");
const CheckInputValid = require("./CheckValid");
const GameJudgment = require("./GameJudgment");
const ComputerInput = require("./ComputerInput");
const { ERROR } = require("./data/Constants");
const { GAME } = require("./data/Constants");

class App {
  constructor() {
    this.computerInput = ComputerInput();
    this.firstTry = true;
    this.errorResult = ERROR.USER_INPUT_PASS;
    this.errorRetryResult = ERROR.USER_INPUT_PASS;
  }

  numToArr(num) {
    return [...String(num)];
  }

  setAndReplay() {
    this.firstTry = false;
    this.computerInput = ComputerInput();
    this.play();
  }

  notThreeStrike() {
    this.firstTry = false;
    this.play();
  }

  getUser() {
    const checkVaild = new CheckInputValid();
    MissionUtils.Console.readLine(GAME.START_GETNUMBER, (num) => {
      this.userNum = this.numToArr(num);
      const checkUserInputValid = checkVaild.checkUserInput(this.userNum);
      if (checkUserInputValid !== ERROR.USER_INPUT_PASS) {
        throw checkUserInputValid;
      }
      this.gameRender();
    });
  }

  getMention() {
    const render = new Render();

    if (this.firstTry === true) {
      render.startment();
    }
  }

  gamePlay() {
    const UserInput = this.userNum;
    const ComputerInput = this.computerInput;
    const gameJudgment = new GameJudgment();
    const [userBallCount, userStrikeCount] = gameJudgment.judgement(
      UserInput,
      ComputerInput
    );
    return [userBallCount, userStrikeCount];
  }

  gameRender() {
    const render = new Render();
    const checkVaild = new CheckInputValid();
    const [userBallCount, userStrikeCount] = this.gamePlay();
    render.result(userBallCount, userStrikeCount);

    if (userStrikeCount !== 3) {
      this.notThreeStrike();
    }
    if (userStrikeCount === 3) {
      render.replayQnA().then((userInput) => {
        this.userRetryNum = userInput;

        const checkUserRetryInputValid = checkVaild.checkUserRetryInput(
          this.numToArr(userInput)
        );
        if (checkUserRetryInputValid !== ERROR.USER_INPUT_PASS) {
          throw checkUserRetryInputValid;
        }
        this.retryOrEnd();
      });
    }
  }
  retryOrEnd() {
    const render = new Render();
    const userRetryNumber = this.userRetryNum;

    if (userRetryNumber === "1") {
      this.setAndReplay();
    }

    if (userRetryNumber === "2") {
      render.end();
      MissionUtils.Console.close();
    }
  }

  play() {
    this.getMention();
    this.getUser();
  }
}

module.exports = App;
