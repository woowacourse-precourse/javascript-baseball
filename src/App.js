const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  play() {
    let computerAnswer = [];
    function makeComputerAnswer() {
      computerAnswer = new Set();
      while (computerAnswer.size < 3) {
        computerAnswer.add(Random.pickNumberInRange(1, 9));
      }
      computerAnswer = Array.from(computerAnswer);
    }
    makeComputerAnswer();
    console.log(computerAnswer);
  }
}
const a = new App();
console.log(a.play());
module.exports = App;
