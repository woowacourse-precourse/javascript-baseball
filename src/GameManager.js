const { print } = require("./utils");
const GAME_MESSAGE = require("./constants/message");

class GameManager {
  getStrikeBallCount(userInput, computerInput) {
    const isStrike = (userValue, index) => userValue === computerInput[index];
    const userScore = {
      strikeCount: 0,
      ballCount: 0,
    };

    userInput.forEach((userValue, idx) => {
      if (isStrike(userValue, idx)) userScore.strikeCount += 1;
      else if (computerInput.includes(userValue)) userScore.ballCount += 1;
    });
    return userScore;
  }

  getResult(strikeCount, ballCount) {
    if (this.getJudgeStrikeOrBall().isAllStrike(strikeCount, ballCount)) {
      print(`${strikeCount}스트라이크`);
      print(GAME_MESSAGE.NOTIFY_GAME_CLEAR);
      return true;
    }

    if (this.getJudgeStrikeOrBall().isStrikeAndBall(strikeCount, ballCount)) {
      print(`${ballCount}볼 ${strikeCount}스트라이크`);
    }
    if (this.getJudgeStrikeOrBall().isOnlyStrike(strikeCount, ballCount)) {
      print(`${strikeCount}스트라이크`);
    }
    if (this.getJudgeStrikeOrBall().isOnlyBall(strikeCount, ballCount)) {
      print(`${ballCount}볼`);
    }
    if (this.getJudgeStrikeOrBall().isNotStrikeAndNotBall(strikeCount, ballCount)) {
      print(`낫싱`);
    }
    return false;
  }

  getJudgeStrikeOrBall() {
    const isAllStrike = (strike, ball) => strike === 3 && ball === 0;
    const isStrikeAndBall = (strike, ball) => strike && ball;
    const isOnlyStrike = (strike, ball) => strike && !ball;
    const isOnlyBall = (strike, ball) => ball && !strike;
    const isNotStrikeAndNotBall = (strike, ball) => !ball && !strike;
    return {
      isAllStrike,
      isStrikeAndBall,
      isOnlyStrike,
      isOnlyBall,
      isNotStrikeAndNotBall,
    };
  }

  apply(numberFromUser, numberFromComputer) {
    const { strikeCount, ballCount } = this.getStrikeBallCount(numberFromUser, numberFromComputer);

    let isGameEnd = this.getResult(strikeCount, ballCount);
    return isGameEnd;
  }
}

module.exports = GameManager;
