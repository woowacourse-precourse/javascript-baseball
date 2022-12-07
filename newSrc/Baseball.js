const MissionUtils = require('@woowacourse/mission-utils');
const { Constant } = require('./Constant');

const { Random } = MissionUtils;

class Baseball {
  #thrownBall;

  #strike;

  #ball;

  constructor() {
    this.#thrownBall = this.ballThrow();
    this.#strike = Constant.ZERO;
    this.#ball = Constant.ZERO;
  }

  setThrwonball() {
    this.#thrownBall = this.ballThrow();
  }

  ballThrow(balls = []) {
    const randomNumber = [...balls];
    if (randomNumber.length === Constant.LENGTH) return randomNumber;

    const ball = Random.pickNumberInRange(Constant.MIN, Constant.MAX);
    if (randomNumber.includes(ball)) return this.ballThrow(randomNumber);

    randomNumber.push(ball);
    return this.ballThrow(randomNumber);
  }

  clearScore() {
    this.#strike = Constant.ZERO;
    this.#ball = Constant.ZERO;
  }

  getThrownBall() {
    return this.#thrownBall;
  }

  setStrike() {
    this.#strike += Constant.INCREASE;
  }

  setBall() {
    this.#ball += Constant.INCREASE;
  }

  getScore() {
    return { strike: this.#strike, ball: this.#ball };
  }
}

module.exports = Baseball;
