const { Console } = require('@woowacourse/mission-utils');
const strikeBallJudgment = require('./judgement.js');
const GAME_MESSAGE = require('../constants/constant.js');

const generateResultMessage = (strikeCount, ballCount) => {
  if (strikeCount === 0 && ballCount === 0) {
    return GAME_MESSAGE.NOTHING;
  }
  if (strikeCount === 0) {
    return `${ballCount}${GAME_MESSAGE.BALL}`;
  }
  if (ballCount === 0) {
    return `${strikeCount}${GAME_MESSAGE.STRIKE}`;
  }
  return `${ballCount}${GAME_MESSAGE.BALL} ${strikeCount}${GAME_MESSAGE.STRIKE}`;
};

const generateResultThisTurn = (computerInputNumbers, userInputNumbers) => {
  const [strikeCount, ballCount] = strikeBallJudgment(computerInputNumbers, userInputNumbers);

  const resultMessage = generateResultMessage(strikeCount, ballCount);
  Console.print(resultMessage);
  return resultMessage;
};

module.exports = generateResultThisTurn;
