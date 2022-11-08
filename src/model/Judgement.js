//@ts-check

class Judgement {
  constructor(ball, strike) {
    this._ball = ball;
    this._strike = strike;
  }
  toString() {
		const messageList = [];
		!this._ball || messageList.push(`${this._ball}볼`);
		!this._strike || messageList.push(`${this._strike}스트라이크`);
		messageList.length || messageList.push("낫싱");
		return messageList.join(" ");
  }
  isAllStrike() {
    return this._strike === 3;
  }
}

module.exports = Judgement;