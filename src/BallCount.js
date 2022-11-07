const COUNT_WORDS = ["볼", "스트라이크"];
const NOTHING = "낫싱";

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

  toString() {
    const ballCount = [this.balls, this.strikes];

    return (
      ballCount
        .map((count, index) => [count, COUNT_WORDS[index]])
        .filter(([count, _]) => count !== 0)
        .map(([count, word]) => `${count}${word}`)
        .join(" ") || NOTHING
    );
  }

  isThreeStrikes() {
    return this.strikes === 3;
  }
}

module.exports = BallCount;
