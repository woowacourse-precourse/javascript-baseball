const MissionUtils = require("@woowacourse/mission-utils");
const makeAnswer = require("./makeNumber");
const getUserExecption = require("./getUserExecption");
const getScore = require("./getScore");
const showMessage = require("./showMessage");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.game();
  }
  game() {
    const answer = makeAnswer();
    console.log(answer); //정답 미리보는 콘솔 로그
    this.userInput(answer);
  }
  userInput(answer) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      const inputArr = getUserExecption(input);
      const score = getScore(inputArr, answer);
      this.checkGame(score, answer);
    });
  }
  checkGame(score, answer) {
    if (score.strike === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    } else {
      showMessage(score);
      this.userInput(answer);
    }
  }
}
const app = new App();
app.play();
module.exports = App;
