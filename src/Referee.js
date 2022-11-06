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
}

module.exports = {Referee, isBall};
