const Message = require('../assets/Message');

const getStrikeAndBallCount = (target, input) => {
  let [strikeCount, ballCount] = [0, 0];

  const [targetArray, inputArray] = [target.split(''), input.split('')];

  inputArray.forEach((inputSingleDigit, index) => {
    const targetSingleDigit = targetArray[index];
    const isStrike = inputSingleDigit === targetSingleDigit;
    const isBall = targetArray.includes(inputSingleDigit) && !isStrike;

    if (isStrike) strikeCount += 1;
    if (isBall) ballCount += 1;
  });

  return [strikeCount, ballCount];
};

const getBaseballResultMessage = (target, input) => {
  const [strikeCount, ballCount] = getStrikeAndBallCount(target, input);
  const { BALL, STRIKE, NOTHING } = Message;

  const isNothing = !strikeCount && !ballCount;
  if (isNothing) return NOTHING;

  const [ballMessage, strikeMessage] = [`${ballCount}${BALL}`, `${strikeCount}${STRIKE}`];

  if (ballCount && strikeCount) return `${ballMessage} ${strikeMessage}`;
  if (ballCount) return ballMessage;
  if (strikeCount) return strikeMessage;
};

module.exports = { getBaseballResultMessage };
