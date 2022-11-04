class BaseballDto {
  constructor() {
    this.#ball = 0;
    this.#strike = 0;
  }
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

export default BaseballDto;
