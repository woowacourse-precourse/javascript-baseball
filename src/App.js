const { Console } = require("@woowacourse/mission-utils");
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

  startMention() {
    const render = new Render();

    if (this.firstTry === true) {
      render.startment();
    }
  }

  getUser() {
    this.startMention();

    Console.readLine(GAME.START_GETNUMBER, (num) => {
      this.userNum = this.numToArr(num);
      this.checkVaild();
    });
  }

  checkVaild() {
    const render = new Render();

    const checkNumVaild = new CheckInputValid();
    const checkUserInputValid = checkNumVaild.checkUserInput(this.userNum);
    if (checkUserInputValid !== ERROR.USER_INPUT_PASS) {
      render.errorThrow(checkUserInputValid);
    }
    this.gameRender();
  }

  gameResult() {
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
    const [userBallCount, userStrikeCount] = this.gameResult();

    render.result(userBallCount, userStrikeCount);

    if (userStrikeCount !== 3) {
      this.notThreeStrike();
    }
    if (userStrikeCount === 3) {
      Console.readLine(GAME.END_RETRY_MENTION, (userInput) => {
        this.userRetryNum = userInput;
        this.checkRetryNumVaild(this.userRetryNum);
      });
    }
  }

  checkRetryNumVaild() {
    const render = new Render();
    const checkRetryNumVaild = new CheckInputValid();
    const checkUserRetryInputValid = checkRetryNumVaild.checkUserRetryInput(
      this.userRetryNum
    );
    if (checkUserRetryInputValid !== ERROR.USER_INPUT_PASS) {
      render.errorThrow(checkUserRetryInputValid);
    }
    this.retryOrEnd();
  }

  retryOrEnd() {
    const render = new Render();
    const userRetryNumber = this.userRetryNum;

    if (userRetryNumber === "1") {
      this.setAndReplay();
    }

    if (userRetryNumber === "2") {
      render.end();
      Console.close();
    }
  }

  play() {
    this.getUser();
  }
}

module.exports = App;
