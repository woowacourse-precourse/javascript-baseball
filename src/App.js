const MissionUtils = require("@woowacourse/mission-utils");

class App {
  getComputerNumber () {
    const computer = [];
    while (computer.length <= 2) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
}

const app = new App();
app.play();

module.exports = App;
