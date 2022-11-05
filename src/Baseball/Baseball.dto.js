class BaseballDto {
  #ball = 0;
  #strike = 0;
  constructor() {}
  get ball() {
    return this.#ball;
  }
  get strike() {
    return this.#strike;
  }
  addBallOne() {
    this.#ball += 1;
  }
  addStrikeOne() {
    this.#strike += 1;
  }
}

module.exports = BaseballDto;
