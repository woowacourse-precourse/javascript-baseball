class BallCount {
  constructor(question, answer) {
    this.strikes = this.countStrikes(question, answer);
    this.balls = this.countBalls(question, answer, this.strikes);
  }

  countStrikes(question, answer) {
    return answer.filter((value, index) => value === question[index]).length;
  }

  countBalls(question, answer, strikes) {
    return answer.filter((value) => question.includes(value)).length - strikes;
  }

  toString() {}

  isThreeStrikes() {
    return this.strikes === 3;
  }
}

module.exports = BallCount;
