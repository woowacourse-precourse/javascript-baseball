const MissionUtils = require("@woowacourse/mission-utils");
let landomNum = parseInt(
  MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join("")
);
let userAnswer;
console.log(typeof landomNum);

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine("숫자를 입력해주세요.", (answer) => {
      userAnswer = answer;
      console.log(userAnswer);
    });
  }
}

// const app = new App();
// app.play();

// module.exports = App;
