const { message } = require('../constants');

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
    const ballMessage = `${ball}${message.BALL}`;
    const strikeMessage = `${strike}${message.STRIKE}`;

    if (ball === 0 && strike === 0) {
      return message.NOTHING;
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
