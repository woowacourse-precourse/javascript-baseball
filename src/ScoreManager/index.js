class ScoreManager {
  #userScore;

  constructor() {
    this.resetScoreManager();
  }

  calScore(targetNums, userNums) {
    let currScore = { BALL: 0, STRIKE: 0 };
    for (let i in userNums) {
      if (this.isStrike(targetNums, userNums[i], i)) {
        currScore.STRIKE++;
      } else if (this.isBall(targetNums, userNums[i], i)) {
        currScore.BALL++;
      }
    }
    this.#userScore = currScore;
  }

  isStrike(targetNums, userNum, idx) {
    return targetNums[idx] === userNum;
  }

  isBall(targetNums, userNum, idx) {
    return targetNums[idx] !== userNum && targetNums.includes(userNum);
  }

  resetScoreManager() {
    this.#userScore = { BALL: 0, STRIKE: 0 };
  }
}

module.exports = ScoreManager;
