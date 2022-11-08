const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let randombaseball = computeRandomNumber();
    console.log(randombaseball);
    start();
  }
}
module.exports = App;

const computeRandomNumber = () => {
  let number = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  return number;
};

const start = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
};

const app = new App();
app.play();
