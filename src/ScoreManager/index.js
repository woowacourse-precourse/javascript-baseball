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

  // 게임을 계속 진행할것인지 판단
  isEndRound() {
    return this.#userScore.STRIKE === 3 ? ROUND_END : ROUND_CONTINUE;
  }

  // 결과를 string으로 출력하는 함수
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

  // 유형에 맞게 횟수와 카테고리를 str으로 배출하는 함수
  getMessage(count, scoreUnit) {
    if (count === 0) return '';
    else return `${count}${scoreUnit} `;
  }

  // Computer의 숫자와 User의 숫자를 비교하여 결과를 출력하는 함수
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

  // Stike가 몇번인지 확인하는 함수
  isStrike(targetNums, userNum, idx) {
    return targetNums[idx] === userNum;
  }

  // Ball가 몇번인지 확인하는 함수
  isBall(targetNums, userNum, idx) {
    return targetNums[idx] !== userNum && targetNums.includes(userNum);
  }

  resetScoreManager() {
    this.#userScore = { BALL: 0, STRIKE: 0 };
  }
}

module.exports = ScoreManager;
