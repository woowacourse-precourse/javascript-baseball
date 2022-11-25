//@ts-check

class Judgement {
  #ball;
  #strike;
  constructor(ball, strike) {
    this.#ball = ball;
    this.#strike = strike;
  }
  toString() {
		const messageList = [];
		!this.#ball || messageList.push(`${this.#ball}볼`);
		!this.#strike || messageList.push(`${this.#strike}스트라이크`);
		messageList.length || messageList.push("낫싱");
		return messageList.join(" ");
  }
  isAllStrike() {
    return this.#strike === 3;
  }
}

module.exports = Judgement;