const MissionUtils = require('@woowacourse/mission-utils');

class Baseball {
  #thrownBall;

  #strike;

  #ball;

  constructor() {
    this.#thrownBall = this.ballThrow();
    this.#strike = 0;
    this.#ball = 0;
  }

  setThrwonball() {
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

  clearScore() {
    this.#strike = 0;
    this.#ball = 0;
  }

  getThrownBall() {
    return this.#thrownBall;
  }

  setStrike() {
    this.#strike += 1;
  }

  setBall() {
    this.#ball += 1;
  }

  getScore() {
    return { strike: this.#strike, ball: this.#ball };
  }
}

module.exports = Baseball;
