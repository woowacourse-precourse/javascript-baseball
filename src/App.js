const MissionUtils = require("@woowacourse/mission-utils");

class App {
  pushUniqueNumber(arr, num) {
    if (!arr.includes(num)) {
      return arr.push(num);
    }
  }
  getRandomComputerArray() {
    let randomComputerArray = [];
    while (randomComputerArray.length < 3) {
      let randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      this.pushUniqueNumber(randomComputerArray, randomNumber);
    }
  }
  play() {}
}
// const app = new App();
// app.play();

module.exports = App;
