const { Console } = require("@woowacourse/mission-utils");
const Render = require("../src/View/Render");
const CheckInputValid = require("../src/Model/CheckInputValid");
const GameJudgment = require("../src/Model/GameJudgment");
const ComputerInput = require("../src/Model/ComputerInput");
const { ERROR, GAME } = require("../src/data/Constants");

const render = new Render();
const checkNumVaild = new CheckInputValid();
const gameJudgment = new GameJudgment();
const checkRetryNumVaild = new CheckInputValid();

class App {
  constructor() {
    this.computerInput = ComputerInput();
    this.firstTry = true;
    this.errorResult = ERROR.USER_INPUT_PASS;
    this.errorRetryResult = ERROR.USER_INPUT_PASS;
  }
  play() {
    this.gameStart();
  }

  startMention() {
    if (this.firstTry === true) {
      render.startment();
      console.log(this.computerInput);
    }
  }

  gameStart() {
    this.startMention();

    Console.readLine(GAME.START_GETNUMBER, (num) => {
      this.userNum = this.numToArr(num);
      this.checkVaild(this.userNum);
    });
  }

  checkVaild(userNum) {
    const checkUserInputValid = checkNumVaild.checkUserInput(userNum);

    render.errorThrow(checkUserInputValid);

    this.gameRender();
  }

  gameRender() {
    const [userBallCount, userStrikeCount] = this.gameBallAndStrike();

    render.result(userBallCount, userStrikeCount);

    this.gameJudge(userStrikeCount);
  }

  gameJudge(userStrikeCount) {
    if (userStrikeCount !== 3) {
      this.notThreeStrike();
    }
    if (userStrikeCount === 3) {
      Console.readLine(GAME.END_RETRY_MENTION, (retryOrEndNum) => {
        this.userRetryNum = retryOrEndNum;
        this.checkRetryNumVaild(this.userRetryNum);
      });
    }
  }

  gameBallAndStrike() {
    const userInput = this.userNum;
    const computerInput = this.computerInput;

    const [userBallCount, userStrikeCount] = gameJudgment.judgement(
      userInput,
      computerInput
    );

    return [userBallCount, userStrikeCount];
  }

  checkRetryNumVaild() {
    const checkUserRetryInputValid = checkRetryNumVaild.checkUserRetryInput(
      this.userRetryNum
    );

    render.errorThrow(checkUserRetryInputValid);

    this.retryOrEnd();
  }

  retryOrEnd() {
    const userRetryNumber = this.userRetryNum;

    if (userRetryNumber === "1") {
      this.settingRetry();
    }

    if (userRetryNumber === "2") {
      const render = new Render();
      render.end();
    }
  }
  numToArr(num) {
    return [...String(num)];
  }

  settingRetry() {
    this.firstTry = false;
    this.computerInput = ComputerInput();
    this.play();
  }

  notThreeStrike() {
    this.firstTry = false;
    this.play();
  }
}

module.exports = App;
