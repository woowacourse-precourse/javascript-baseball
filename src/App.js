const MissionUtils = require("@woowacourse/mission-utils");
const readLine = MissionUtils.Console.readLine;
const print = MissionUtils.Console.print;
const closeConsole = MissionUtils.Console.close;
class App {
  makeRandomNumber() {
    let arr = new Set();
    while (arr.size < 3) {
      arr.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return Array.from(arr);
  }

  play() {
    let randomNumbers = this.makeRandomNumber();
  }
}
const app = new App();
app.play();
module.exports = App;
