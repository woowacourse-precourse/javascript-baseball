const MissionUtils = require("@woowacourse/mission-utils");
const getScore = require("./getScore");
const getUserExecption = require("./getUserExecption");
const makeAnswer = require("./makeNumber");

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
      console.log(score);
    });
  }
}
const app = new App();
app.play();
module.exports = App;
