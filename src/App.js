import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const RANDOM_NUMBER = this.GET_RANDOM_NUMBER();
  }

  GET_RANDOM_NUMBER() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3); //ex - [2,5,6]
  }
}

module.exports = App;
