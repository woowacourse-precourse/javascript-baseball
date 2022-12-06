const MissionUtils = require('@woowacourse/mission-utils');

class Baseball {
  #thrownBall;

  constructor() {
    this.#thrownBall = this.ballThrow();
  }

  ballThrow(balls = []) {
    const randomNumber = [...balls];
    if (randomNumber.length === 3) return randomNumber;

    const ball = MissionUtils.Random.pickNumberInRange(1, 9);
    if (randomNumber.includes(ball)) return this.ballThrow(randomNumber);

    randomNumber.push(ball);
    return this.ballThrow(randomNumber);
  }

  getThrownBall() {
    return this.#thrownBall;
  }
}

module.exports = Baseball;
