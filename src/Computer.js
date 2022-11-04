import MissionUtils from '@woowacourse/mission-utils';

class Computer {
  constructor() {
    this.setter();
  }

  getter() {
    return this.answer;
  }

  setter() {
    this.answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}

export default Computer;
