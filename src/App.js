const MissionUtils = require("@woowacourse/mission-utils");
const Render = require("./Render");
const CheckInputValid = require("./CheckValid");
const GameJudgment = require("./GameJudgment");
const ComputerInput = require("./ComputerInput");

function numToArr(num) {
  return [...String(num)];
}

class App {
  constructor() {
    this.computerInput = ComputerInput();
    this.firstTry = true;
  }

  play() {
    const render = new Render();

    if (this.firstTry === true) {
      render.startment();
    }

    render.getUser().then((num) => {
      this.userNum = numToArr(num);
      const checkInputValid = new CheckInputValid({
        userNum: this.userNum,
        retryNum: this.replayQnAResult,
      });

      try {
        checkInputValid.checkValidation();
      } catch (error) {
        throw new Error(error);
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
        this.firstTry = false;
        this.play();
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
            this.firstTry = true;
            this.computerInput = ComputerInput();
            this.play();
          }

          if (this.replayQnAResult === "2") {
            MissionUtils.Console.print("수고하셨습니다.");
            MissionUtils.Console.close();
          }
        });
      }
    });
  }
}

module.exports = App;
