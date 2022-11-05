const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;

class App {
  makeRandomNumbers() {
    const computerNumber = Random.pickUniqueNumbersInRange(1, 9, 3);
    this.computerNumberArray = computerNumber;
  }

  play() {
    this.makeRandomNumbers();
  }
}

const app = new App();
app.play();

module.exports = App;
