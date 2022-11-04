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

  #gameOver() {}

  #getResult() {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (this.#computerValue[i] === this.#userValue[i]) strike++;
      else if (this.#computerValue.includes(this.#userValue[i])) ball++;
    }

    const nothingString = ball === 0 && strike === 0 ? '낫싱' : '';
    const ballString = ball ? `${ball}볼 ` : '';
    const strikeString = strike ? `${strike}스트라이크` : '';

    MissionUtils.Console.print(nothingString + ballString + strikeString);

    if (strike === 3) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.#gameOver();
    } else this.#readUserValue();
  }

  #setUserValue(value) {
    if (this.#isAvailableValue(value)) {
      this.#userValue = value;
      this.#getResult();
    } else throw Error('잘못된 값을 입력했습니다. 게임을 종료합니다.');
  }

  #readUserValue() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => this.#setUserValue(answer));
  }

  play() {
    if (!this.#isPlaying) MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.#isPlaying = true;

    this.#setRandomComputerValue();
    this.#readUserValue();
  }
}

module.exports = App;
