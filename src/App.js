const MissionUtils = require("@woowacourse/mission-utils");
const Render = require("./Render");
const CheckInputValid = require("./CheckValid");
const GameJudgment = require("./GameJudgment");
const ComputerInput = require("./ComputerInput");
const { ERROR } = require("./constants");
class App {
  constructor() {
    this.computerInput = ComputerInput();
    this.firstTry = true;
    this.errorResult = "123";
  }

  numToArr(num) {
    return [...String(num)];
  }

  setAndReplay() {
    this.firstTry = true;
    this.computerInput = ComputerInput();
    this.play();
  }

  notThreeStrike() {
    this.firstTry = false;
    this.play();
  }

  play() {
    const render = new Render();

    if (this.firstTry === true) {
      render.startment();
    }

    render.getUser().then((num) => {
      this.userNum = this.numToArr(num);

      const checkInputValid = new CheckInputValid({
        userNum: this.userNum,
      });

      const errorResult = checkInputValid.checkValidation();

      this.errorResult = errorResult;

      if (this.errorResult !== ERROR.USER_INPUT_PASS) {
        render.errorThrow(this.errorResult);
      }

      const gameJudgment = new GameJudgment({
        user: this.userNum,
        computer: this.computerInput,
      });

      const [ballCount, strikeCount] = gameJudgment.judgement();
      this.ball = ballCount;
      this.strikeCount = strikeCount;

      render.result({ ballCount: this.ball, strikeCount: this.strikeCount });
      console.log(this.computerInput);

      if (this.strikeCount !== 3) {
        this.notThreeStrike();
      }
      if (this.strikeCount === 3) {
        render.replayQnA().then((userSelection) => {
          this.replayQnAResult = userSelection;

          const checkRetry = new CheckInputValid({
            userNum: this.userNum,
            retryNum: this.replayQnAResult,
          });
          try {
            checkRetry.checkRetryInput();
          } catch (error) {
            throw new Error(error);
          }
          if (this.replayQnAResult === "1") {
            this.setAndReplay();
          }

          if (this.replayQnAResult === "2") {
            render.end();
            MissionUtils.Console.close();
          }
        });
      }
    });
  }
}

module.exports = App;
