const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print(START_MESSAGE);
    this.getComputerNumber();
  }
  getComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      number = number.toString();
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    MissionUtils.Console.print(computer);
    this.compare(computer);
  }
}

const app = new App();
app.play();

module.exports = App;