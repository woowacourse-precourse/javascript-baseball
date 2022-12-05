class Baseball {
  #thrownBall;

  constructor() {
    this.#thrownBall = this.ballThrow();
  }

  ballThrow() {
    // todo return = 랜덤번호 생성
  }

  getThrownBall() {
    return this.#thrownBall;
  }
}

module.exports = Baseball;
