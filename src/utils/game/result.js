const { Console } = require('@woowacourse/mission-utils');
const strikeBallJudgment = require('./judgement.js');

const generateResultMessage = (strikeCount, ballCount) => {
  if (strikeCount === 0 && ballCount === 0) {
    return `낫싱`;
  }
  if (strikeCount === 0) {
    return `${ballCount}볼`;
  }
  if (ballCount === 0) {
    return `${strikeCount}스트라이크`;
  }
  return `${ballCount}볼 ${strikeCount}스트라이크`;
};

const generateResultThisTurn = (computerInputNumbers, userInputNumbers) => {
  const [strikeCount, ballCount] = strikeBallJudgment(computerInputNumbers, userInputNumbers);

  const resultMessage = generateResultMessage(strikeCount, ballCount);
  Console.print(resultMessage);
  return resultMessage;
};

module.exports = generateResultThisTurn;
