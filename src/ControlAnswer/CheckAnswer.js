const { GAME, ANSWER } = require('../Constants');
const { Console } = require('@woowacourse/mission-utils');

const strikeCount = (numArr, answer) => {
  return numArr.filter((number, i) => number === answer[i]).length;
};

const ballCount = (numArr, answer) => {
  return numArr.filter(
    (number, i) => answer.includes(number) && number !== answer[i]
  ).length;
};

const isNothing = (strikeCount, ballCount) => strikeCount + ballCount === 0;

const isMatchAnswer = (numArr, answer) => {
  const strikeCnt = strikeCount(numArr, answer);
  return strikeCnt === ANSWER.LENGTH;
};

const calculateResult = (numArr, answer) => {
  const strikeCnt = strikeCount(numArr, answer);
  const ballCnt = ballCount(numArr, answer);

  if (strikeCnt && ballCnt)
    Console.print(`${ballCnt}${GAME.BALL} ${strikeCnt}${GAME.STRIKE}`);
  else if (isNothing(strikeCnt, ballCnt)) Console.print(GAME.NOTHING);
  else if (ballCnt === 0) Console.print(`${strikeCnt}${GAME.STRIKE}`);
  else if (strikeCnt === 0) Console.print(`${ballCnt}${GAME.BALL}`);
};

module.exports = {
  calculateResult,
  isMatchAnswer,
  strikeCount,
  ballCount,
  isNothing,
};
