import MissionUtils from '@woowacourse/mission-utils';

class Computer {
  constructor() {
    this.getAnswer();
  }

  getAnswer() {
    this.answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}

export default Computer;
