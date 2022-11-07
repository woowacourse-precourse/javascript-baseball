const { OUTPUT_MESSAGE } = require('../constant');

function scoreConversion(strike, ball) {
  if (strike === 0 && ball === 0) {
    return OUTPUT_MESSAGE.NOTHING;
  }
  if (strike === 3) {
    return OUTPUT_MESSAGE.CORRECT_ANSWER;
  }
  if (ball > 0 && strike > 0) {
    return `${ball}${OUTPUT_MESSAGE.BALL} ${strike}${OUTPUT_MESSAGE.STRIKE}`;
  }
  if (ball > 0 && strike === 0) {
    return `${ball}${OUTPUT_MESSAGE.BALL}`;
  }
  if (strike > 0 && ball === 0) {
    return `${strike}${OUTPUT_MESSAGE.STRIKE}`;
  }
}

module.exports = scoreConversion;
