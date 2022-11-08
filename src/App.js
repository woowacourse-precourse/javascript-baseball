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
    });
  }

}

module.exports = App;
