const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor(number) {
    this.number = number;
  }

  play() {}
}

module.exports = App;

let gameNumber = new App(MissionUtils.Random.pickNumberInRange(100, 999));
console.log(gameNumber.number);
