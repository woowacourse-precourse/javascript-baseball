const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    // 3개의 랜덤숫자 생성
    let RANDOM_VALUE = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}

const app = new App();

app.play();

module.exports = App;
