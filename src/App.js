import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  play() {
    const RANDOM_NUMBER = this.GET_RANDOM_NUMBER();
  }

  GET_RANDOM_NUMBER() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3); //ex - [2,5,6]
  }
}

module.exports = App;
