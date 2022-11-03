import { Console, Random } from '@woowacourse/mission-utils';

export default class Computer {
  constructor() {
    this.number = this.initNumber();
  }

  initNumber() {
    const container = [Random.pickNumberInRange(1, 9)];
    while (container.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (container.includes(number)) {
        continue;
      }
      container.push(number);
    }
    return container;
  }
}
