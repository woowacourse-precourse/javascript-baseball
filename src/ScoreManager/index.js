const { Console } = require('@woowacourse/mission-utils');
const {
  BALL_STATUS,
  NOTHING,
  ROUND_CONTINUE,
  ROUND_END,
} = require('../utils/Constant');

class ScoreManager {
  #userScore;

  constructor() {
    this.resetScoreManager();
  }

  isEndRound() {
    return this.#userScore.STRIKE === 3 ? ROUND_END : ROUND_CONTINUE;
  }

  getUserScoreStr() {
    let result = '';
    Object.keys(this.#userScore).forEach((scoreUnit) => {
      result += this.getMessage(
        this.#userScore[scoreUnit],
        BALL_STATUS[scoreUnit]
      );
    });
    Console.print(result !== '' ? result.trim() : NOTHING);
  }

  getMessage(count, scoreUnit) {
    if (count === 0) return '';
    else return `${count}${scoreUnit} `;
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
