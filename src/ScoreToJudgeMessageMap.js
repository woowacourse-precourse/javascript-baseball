const scoreToJudgeMessageMap = {
  BALL_MSG: "볼",
  STRIKE_MSG: "스트라이크",
  NOTHING_MSG: "낫싱",

  getJudgeMessage({ ballCount, strikeCount, isNothing }) {
    if (isNothing === true) return this.NOTHING_MSG;
    if (strikeCount === 0) return `${ballCount}${this.BALL_MSG}`;
    if (ballCount === 0) return `${strikeCount}${this.STRIKE_MSG}`;
    return `${ballCount}${this.BALL_MSG} ${strikeCount}${this.STRIKE_MSG}`;
  },
};

module.exports = scoreToJudgeMessageMap;
