const { Random } = require('@woowacourse/mission-utils');

function pickUniqueNumbersInRange(start, end, count) {
  const targat = [];
  while (targat.length < count) {
    const number = Random.pickNumberInRange(start, end);
    if (!targat.includes(number)) {
      targat.push(number);
    }
  }
  return targat;
}

function getBallString(ball) {
  if (ball !== 0) {
    return `${ball}볼`;
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
  if (ball + strike === 0) {
    return '낫싱';
  }

  const ballString = getBallString(ball);
  const strikeString = getStrikeString(strike);

  if (ballString === '') {
    return strikeString;
  }

  return `${ballString} ${strikeString}`;
}

function getBallsAndStrikes(target, input) {
  const inputArray = Array.from(input);
  const initialValue = {
    balls: 0,
    strikes: 0,
  };

  return inputArray.reduce((acc, cur, idx) => {
    if (cur === target[idx]) {
      acc.strikes += 1;
      return acc;
    }

    if (target.includes(cur)) {
      acc.balls += 1;
      return acc;
    }

    return acc;
  }, initialValue);
}

function getUniqueNumberCount(string) {
  const matchs = string.match(/[1-9]/g) || [];
  const uniqueNumberCount = [...new Set(matchs)].length;

  return uniqueNumberCount;
}

module.exports = {
  pickUniqueNumbersInRange,
  getGuessResult,
  getBallsAndStrikes,
  getUniqueNumberCount,
};
