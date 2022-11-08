const { COUNT_MESSAGE } = require('../constants');

const { STRIKE, BALL, NOTHING } = COUNT_MESSAGE;

function compareDigit(number, inputArrIndex, inputArr) {
  if (number === inputArr[inputArrIndex]) {
    return STRIKE;
  }

  if (number !== inputArr[inputArrIndex] && inputArr.includes(number)) {
    return BALL;
  }

  return 'nothing';
}

function compareArrResult(comArr, userArr) {
  let result = { 스트라이크: 0, 볼: 0 };

  comArr.forEach((elem, index) => {
    let strikeOrBall = compareDigit(elem, index, userArr);
    result[strikeOrBall] += 1;
  });

  let strikeCount = result[STRIKE];
  let ballCount = result[BALL];

  if (ballCount > 0 && strikeCount > 0) {
    return `${ballCount}${BALL} ${strikeCount}${STRIKE}`;
  }
  if (ballCount === 0 && strikeCount > 0) {
    return `${strikeCount}${STRIKE}`;
  }
  if (ballCount > 0 && strikeCount === 0) {
    return `${ballCount}${BALL}`;
  }
  return NOTHING;
}

module.exports = compareArrResult;
