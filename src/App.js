const MissionUtils = require("@woowacourse/mission-utils");

const gameStart = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
};

const pickRandomNumber = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join("");
};

class App {
  play() {
    gameStart();

    let answer = pickRandomNumber();
  }
}

module.exports = App;

const app = new App();
app.play();
