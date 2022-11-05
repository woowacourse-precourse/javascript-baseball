const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

  //build_answer
  build_answer() {
    const answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
    return answer;
  }
}

module.exports = App;
