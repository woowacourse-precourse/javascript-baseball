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

    const checkUserInputValid = checkVaild.checkUserInput();
    render.getUser().then((num) => {
      if (checkUserInputValid !== ERROR.USER_INPUT_PASS) {
        render.errorThrow(checkUserInputValid);
      }

      return numToArr(num);
    });
  }

  getMention() {
    const render = new Render();

    if (this.firstTry === true) {
      render.startment();
    }
  }

gamePlay(){
const UserInput =this.getUser()
const ComputerInput=this.computerInput
 const gameJudgment = new GameJudgment();
 const [userBallCount,userStrikeCount]= gameJudgment.judgement(UserInput,ComputerInput)
return [userBallCount,userStrikeCount]
}

  play() {
    this.getMention();
    this.getUser();

    

      const gameJudgment = new GameJudgment({
        user: this.userNum,
        computer: this.computerInput,
      });

      const [ballCount, strikeCount] = gameJudgment.judgement();
      this.ball = ballCount;
      this.strikeCount = strikeCount;

      render.result({ ballCount: this.ball, strikeCount: this.strikeCount });

      if (this.strikeCount !== 3) {
        this.notThreeStrike();
      }
      if (this.strikeCount === 3) {
        render.replayQnA().then((retryOrEnd) => {
          this.replayQnAResult = retryOrEnd;

          const checkRetry = new CheckInputValid({
            userNum: this.userNum,
            retryNum: this.replayQnAResult,
          });

          this.errorRetryResult = checkRetry.checkRetryInput();

          if (this.errorRetryResult !== ERROR.USER_INPUT_PASS) {
            this.errorResult();
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
  error() {
    throw new Error(this.errorResult);
  }
  errorRetry() {
    throw new Error(this.errorRetryResult);
  }
}

module.exports = App;
