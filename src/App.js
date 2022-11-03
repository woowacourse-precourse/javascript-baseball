import * as MissionUtils from '@woowacourse/mission-utils';

class App {
  play() {
    const computer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}




module.exports = App;
