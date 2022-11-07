const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const answer = [];
    while (answer.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(num)) {
        answer.push(num);
      }
    }

    MissionUtils.Console.print(answer);
  }
}

module.exports = App;

const app = new App();
app.play();
