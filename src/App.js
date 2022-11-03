const MissionUtils = require("@woowacourse/mission-utils");

// MissionUtils.Console.print(MissionUtils.Random.pickNumberInList([1, 2, 3]));
// MissionUtils.Console.close();
class App {
  createRandomNumber() {
    this.randomNumber = [...Array(3)].map((v) =>
      MissionUtils.Random.pickNumberInRange(1, 9)
    );
  }
  play() {
    MissionUtils.Console.print(this.randomNumber);
  }
}

let app1 = new App();
app1.createRandomNumber();
app1.play();

MissionUtils.Console.close();

module.exports = App;
