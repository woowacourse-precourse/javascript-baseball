const {Console, Random} = require("@woowacourse/mission-utils");

const isStrike = (answers, inputs) => {
  let count = 0;
  for (let i = 0; i < 3; i++) {
    if (answers[i] === inputs[i]) {
      count += 1;
    }
  }
  return count;
}

const isBall = (answers, inputs) => {
  let count = 0;
  inputs.map (input => {
    if (answers.includes(input)) {
      count += 1;
    }
  })

  return count;
}

class Referee {
  ball;
  strike;

  get ball() {
    return this._ball;
  }
  set ball(value) {
    this._ball = value
  }
  get strike() {
    return this._strike;
  }
  set strike(value) {
    this._strike = value
  }
  judge (answers, inputs) {
    this.strike = isStrike(answers, inputs);
    this.ball = isBall(answers, inputs) - this.strike;
  }
}

module.exports = {Referee, isBall, isStrike};
