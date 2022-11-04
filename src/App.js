const MissionUtils = require('@woowacourse/mission-utils');
class App {
  play() {}

  getComputerNumber() {
    const computerNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return computerNumbers;
  }
}

const app = new App();
app.play();

module.exports = App;
