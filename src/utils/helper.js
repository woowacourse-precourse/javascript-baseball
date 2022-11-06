const { GAME_MESSAGE } = require('../constants/baseball');

class BaseballHelper {
  static calculateBallStrikeCount(computerNumbers, userNumbers) {
    const ballStrikeCount = {
      ball: 0,
      strike: 0,
    };

    userNumbers.forEach((number, i) => {
      if (number === computerNumbers[i]) {
        ballStrikeCount.strike += 1;
        return;
      }

      if (computerNumbers.includes(number)) {
        ballStrikeCount.ball += 1;
      }
    });

    return ballStrikeCount;
  }

  static getCountMessage({ ball, strike }) {
    const ballMessage = `${ball}${GAME_MESSAGE.BALL}`;
    const strikeMessage = `${strike}${GAME_MESSAGE.STRIKE}`;

    if (ball === 0 && strike === 0) {
      return GAME_MESSAGE.NOTHING;
    }

    if (ball > 0 && strike === 0) {
      return ballMessage;
    }

    if (ball === 0 && strike > 0) {
      return strikeMessage;
    }

    return `${ballMessage} ${strikeMessage}`;
  }
}

module.exports = BaseballHelper;
