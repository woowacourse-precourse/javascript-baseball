const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(computerRandomNumber = null, userAnswer = null) {
    this.computerRandomNumber = computerRandomNumber;
    this.userAnswer = userAnswer;
  }
  play() {
    greeting();
    this.computerRandomNumber = makeRandomNumberArray();
    this.userAnswer = this.inputUserAnswer();
  }
  inputUserAnswer() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.userAnswer = answer;
    });
  }
}

function makeRandomNumberArray() {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
}

function greeting() {
  console.log("숫자 야구 게임을 시작합니다.");
}
const app = new App();
app.play();
console.log(app.userAnswer);
module.exports = App;
