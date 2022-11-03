const MissionUtils = require("@woowacourse/mission-utils");

let CORRECT_NUMBER = [];

function makeCorrectNumber() {
  CORRECT_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
}

let ANSWER_NUMBER = [];
function putNumber() {
  MissionUtils.Console.readLine("숫자를 입력해주세요 :", (answer) => {
    ANSWER_NUMBER = answer.split("").map(Number);
    console.log(ANSWER_NUMBER);
  });
}

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    makeCorrectNumber();
    putNumber();
  }
}

const app = new App();
app.play();

module.exports = App;

// node src/App.js
