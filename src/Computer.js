import MissionUtils from '@woowacourse/mission-utils';

class Computer {
  number = {
    min: 1,
    max: 9,
    count: 3,
  };

  getter() {
    return this.answer;
  }

  setAnswer() {
    this.answer = MissionUtils.Random.pickUniqueNumbersInRange(
      this.number.min,
      this.number.max,
      this.number.count
    );
  }
}

export default Computer;
