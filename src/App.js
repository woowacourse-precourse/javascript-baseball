const MissionUtils = require('@woowacourse/mission-utils');

class App {
  #isPlaying;
  #computerValue;
  #userValue;

  constructor() {
    this.#isPlaying = false;
    this.#computerValue = '';
    this.#userValue = '';
  }

  #setRandomComputerValue() {
    let randomValue = '';
    let randomNumber;

    while (randomValue.length < 3) {
      randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomValue.includes(randomNumber)) randomValue += randomNumber;
    }

    this.#computerValue = randomValue;
  }

  #isAvailableValue(value) {
    let stringValue = value + '';

    return stringValue.length === 3 && /^[1-9]{3}$/.test([...new Set(stringValue)].join(''));
  }

  #readUserValue() {}

  play() {
    if (!this.#isPlaying) MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.#isPlaying = true;

    this.#setRandomComputerValue();
    this.#readUserValue();
  }
}

module.exports = App;
