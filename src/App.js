import { Console, Random } from '@woowacourse/mission-utils';

class App {
  #isPlaying = false;
  #computerValue = null;
  #userValue = null;

  setRandomComputerValue() {
    let randomValue = Random.pickUniqueNumbersInRange(1, 9, 3).join();
    this.#computerValue = randomValue;
  }

  isAvailableValue(value) {
    let stringValue = value + '';
    return stringValue.length === 3 && /^[1-9]{3}$/.test([...new Set(stringValue)].join(''));
  }
}

module.exports = App;
