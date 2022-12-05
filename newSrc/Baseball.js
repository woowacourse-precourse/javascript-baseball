const MissionUtils = require('@woowacourse/mission-utils');

class Baseball {
  #thrownBall;

  constructor() {
    this.#thrownBall = this.ballThrow();
  }

  ballThrow(balls = []) {
    const drawnBall = MissionUtils.Random.pickNumberInRange(1, 9);
    return 
  }

  getThrownBall() {
    return this.#thrownBall;
  }
}

module.exports = Baseball;
