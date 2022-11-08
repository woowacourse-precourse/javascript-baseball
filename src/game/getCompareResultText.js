const { GAME_RESULT_TEXT } = require('../constant/gameRule');

const getCompareResultText = (strikeScore, ballScore) => {
  let compareResultText = '';
  if (strikeScore === 0 && ballScore === 0) {
    compareResultText = GAME_RESULT_TEXT.NOTHING;
  } else if (ballScore === 0) {
    compareResultText = `${strikeScore}${GAME_RESULT_TEXT.STRIKE}`;
  } else if (strikeScore === 0) {
    compareResultText = `${ballScore}${GAME_RESULT_TEXT.BALL}`;
  } else if (strikeScore > 0 && ballScore > 0) {
    compareResultText = `${ballScore}${GAME_RESULT_TEXT.BALL} ${strikeScore}${GAME_RESULT_TEXT.STRIKE}`;
  }

  return compareResultText;
};

module.exports = getCompareResultText;
