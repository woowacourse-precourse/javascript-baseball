const { Random, Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  HIT_BALLS: '숫자를 입력해주세요 : ',
};

class App {
  #answer = [];

  constructor() {
    this.balls = [];
  }

  play() {
    this.#answer = App.#pickRandomNumbers(3);
    this.#hitBalls();
  }

  static #pickRandomNumbers(count) {
    const result = new Set();
    while (result.size !== count) {
      const random = Random.pickNumberInRange(1, 9);
      result.add(random);
    }
    return Array.from(result);
  }

  #hitBalls() {
    Console.readLine(MESSAGE.HIT_BALLS, (input) => {
      this.balls = input.split('').map((e) => +e);
      App.#validateNumbers(this.balls);
    });
  }

  static #validateNumbers(numbersArray) {
    if (numbersArray.filter((n) => Number.isNaN(n)).length > 0) {
      throw new Error('inputValue must be numbers.');
    }

    if (numbersArray.length !== 3) {
      throw new Error('numbers length must be 3.');
    }

    if (new Set(numbersArray).size !== 3) {
      throw new Error('inputValue cannot be duplicated');
    }

    if (numbersArray.filter((n) => !(n >= 1 && n <= 9)).length > 0) {
      throw new Error('inputValue cannot be grater than 9 or less than 1');
    }
  }

}

module.exports = App;
