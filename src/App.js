const MissionUtils = require("@woowacourse/mission-utils");
const Render = require("./Render");
const CheckInputValid = require("./CheckValid");
const GameJudgment = require("./GameJudgment");
const ComputerInput = require("./ComputerInput");
const { ERROR } = require("./data/Constants");

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
    const render = new Render();
    const checkVaild = new CheckInputValid();

    render.getUser().then((num) => {
      this.userNum = this.numToArr(num);
      const checkUserInputValid = checkVaild.checkUserInput(this.userNum);

      if (checkUserInputValid !== ERROR.USER_INPUT_PASS) {
        render.errorThrow(checkUserInputValid);
      }
      this.retryOrEnd();
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

    const [userBallCount, userStrikeCount] = this.gamePlay();
    render.result(userBallCount, userStrikeCount);

    if (userStrikeCount !== 3) {
      this.notThreeStrike();
    }
    if (userStrikeCount === 3) {
      render.replayQnA().then((userInput) => {
        this.userRetryNum = this.numToArr(userInput);

        const checkUserRetryInputValid = checkVaild.checkRetryInput(
          this.numToArr(userInput)
        );
        if (checkUserRetryInputValid !== ERROR.USER_INPUT_PASS) {
          render.errorRetryResult;
        }

        return this.userRetryNum;
      });
    }
  }
  retryOrEnd() {
    const render = new Render();
    const userRetryNumber = this.gameRender();

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
