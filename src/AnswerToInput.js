const { NOTHING, THREE_STRIKE } = require('./TextData');

function countStrike(USER_INPUT, computerAnswer) {
  let count = 0;
  computerAnswer.forEach((data, index) => {
    if (data === USER_INPUT[index]) {
      count += 1;
    }
  });
  return count;
}

function countBall(USER_INPUT, computerAnswer) {
  let count = 0;
  computerAnswer.forEach((data) => {
    if (USER_INPUT.includes(data)) {
      count += 1;
    }
  });
  return count;
}

function answerToInput(USER_INPUT, computerAnswer) {
  const STRIKE = countStrike(USER_INPUT, computerAnswer);
  const BALL = countBall(USER_INPUT, computerAnswer) - STRIKE;
  if (BALL === 0 && STRIKE === 0) {
    return NOTHING;
  }

  if (STRIKE === 0) {
    return `${BALL}볼`;
  }

  if (BALL === 0) {
    return `${STRIKE}스트라이크`;
  }

  if (STRIKE === 3) {
    return THREE_STRIKE;
  }

  return `${BALL}볼 ${STRIKE}스트라이크`;
}

module.exports = answerToInput;
