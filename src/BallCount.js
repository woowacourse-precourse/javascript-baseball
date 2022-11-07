class BallCount {
  constructor(question, answer) {
    this.strikes = this.countStrikes(question, answer);
    this.balls = null;
  }

  countStrikes(question, answer) {
    return answer.filter((value, index) => value === question[index]).length;
  }

  countBalls(question, answer, strikes) {}

  toString() {}

  isThreeStrikes() {}
}

module.exports = BallCount;
