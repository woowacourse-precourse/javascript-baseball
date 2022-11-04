const MissionUtils = require('@woowacourse/mission-utils');
const Messages = require('./constants/Messages');

class App {
  play() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    MissionUtils.Console.print(Messages.START);
  }
}
const app = new App();
app.play();

module.exports = App;
