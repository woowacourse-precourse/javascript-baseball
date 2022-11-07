const MissionUtils = require("@woowacourse/mission-utils");
const makeAnswer = require("./makeNumber");
const getUserExecption = require("./getUserExecption");
const getScore = require("./getScore");
const showMessage = require("./showMessage");

class App {
  MESSAGES = {
    START: "숫자 야구 게임을 시작합니다.",
    INPUT: "숫자를 입력해주세요 : ",
    END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  };
  play() {
    MissionUtils.Console.print(this.MESSAGES.START);
    this.game();
  }
  game() {
    const answer = makeAnswer();
    this.userInput(answer);
  }
  userInput(answer) {
    MissionUtils.Console.readLine(this.MESSAGES.INPUT, (input) => {
      const inputArr = getUserExecption(input);
      const score = getScore(inputArr, answer);
      this.checkGame(score, answer);
    });
  }
  checkGame(score, answer) {
    if (score.strike === 3) {
      showMessage(score);
      MissionUtils.Console.print(this.MESSAGES.END);
      this.restart();
    } else {
      showMessage(score);
      this.userInput(answer);
    }
  }
  restart() {
    MissionUtils.Console.readLine(this.MESSAGES.RESTART, (input) => {
      if (parseInt(input) === 1) {
        this.game();
      } else if (parseInt(input) === 2) {
        MissionUtils.Console.close();
      } else {
        throw new Error();
      }
    });
  }
}
const app = new App();
app.play();
module.exports = App;
