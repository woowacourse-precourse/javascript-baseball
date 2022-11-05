const scoreToMessageMap = {
  ballCount: 0,
  strikeCount: 0,
  isNothing: null,
  setProperty({ ballCount, strikeCount, isNothing }) {
    this.ballCount = ballCount;
    this.strikeCount = strikeCount;
    this.isNothing = isNothing;
  },
  getJudgeMessage() {
    if (this.isNothing === true) return "낫싱";
    if (this.strikeCount === 0) return `${this.ballCount}볼`;
    if (this.ballCount === 0) return `${this.strikeCount}스트라이크`;
    return `${this.ballCount}볼 ${this.strikeCount}스트라이크`;
  },
};

module.exports = scoreToMessageMap;
