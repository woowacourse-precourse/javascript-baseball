const scoreToMessageMap = {
  BALL_MSG: "볼",
  STRIKE_MSG: "스트라이크",
  NOTHING_MSG: "낫싱",

  ballCount: 0,
  strikeCount: 0,
  isNothing: false,

  setProperty({ ballCount, strikeCount, isNothing }) {
    this.ballCount = ballCount;
    this.strikeCount = strikeCount;
    this.isNothing = isNothing;
  },

  getJudgeMessage() {
    if (this.isNothing === true) return this.NOTHING_MSG;
    if (this.strikeCount === 0) return `${this.ballCount}${this.BALL_MSG}`;
    if (this.ballCount === 0) return `${this.strikeCount}${this.STRIKE_MSG}`;
    return `${this.ballCount}${this.BALL_MSG} ${this.strikeCount}${this.STRIKE_MSG}`;
  },
};

module.exports = scoreToMessageMap;
