import MissionUtils from '@woowacourse/mission-utils';

class Computer {
  constructor() {
    this._answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}

export default Computer;
