const { Random } = require('@woowacourse/mission-utils');

function makeTarget() {
  return Random.pickUniqueNumbersInRange(1, 9, 3).map(String);
}

function getBallString(ball) {
  if (ball !== 0) {
    return `${ball}볼 `;
  }
  return '';
}

function getStrikeString(strike) {
  if (strike !== 0) {
    return `${strike}스트라이크`;
  }
  return '';
}

function getGuessResult(ball, strike) {
  const ballString = getBallString(ball);
  const strikeString = getStrikeString(strike);

  return `${ballString}${strikeString}`;
}

function getBallsAndStrikes(target, input) {
  const targetArray = Array.from(target);
  const inputArray = Array.from(input);
  const initialValue = {
    balls: 0,
    strikes: 0,
  };

  return inputArray.reduce((acc, cur, idx) => {
    if (cur === targetArray[idx]) {
      acc.strikes += 1;
      return acc;
    }

    if (targetArray.includes(cur)) {
      acc.balls += 1;
      return acc;
    }

    return acc;
  }, initialValue);
}

module.exports = {
  makeTarget,
  getGuessResult,
  getBallsAndStrikes,
};
