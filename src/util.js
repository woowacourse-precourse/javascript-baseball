const MissionUtils = require('@woowacourse/mission-utils');

const { Random, Console } = MissionUtils;
const BALL = 0;
const STRIKE = 1;

function getQueryArrFromQuery(query) {
  return query.split('');
}

function getScore(answer, query) {
  const queryArr = getQueryArrFromQuery(query);
  let strike = 0;
  let ball = 0;
  answer.forEach((num, idx) => {
    const hasNumber = queryArr.indexOf(num.toString());
    if (hasNumber === idx) strike += 1;
    else if (hasNumber !== -1) ball += 1;
  });
  return [ball, strike];
}

function printFeedback(score) {
  const ballFeedback = (score[BALL] && `${score[BALL]}볼 `) || '';
  const strikeFeedback = (score[STRIKE] && `${score[STRIKE]}스트라이크`) || '';
  Console.print(ballFeedback + strikeFeedback || '낫싱');
}

function isFinish(score) {
  if (score[STRIKE] === 3) return true;
  return false;
}

function randomGenerator() {
  const ret = [];
  while (ret.length < 3) {
    const num = Random.pickNumberInRange(1, 9);
    if (ret.indexOf(num) === -1) ret.push(num);
  }
  return ret;
}

function hasError(query) {
  let err = false;
  const queryArr = getQueryArrFromQuery(query);
  const querySet = new Set(queryArr);
  if (queryArr.length > 3) return true;
  if (querySet.size !== 3) return true;
  queryArr.forEach((num) => {
    if (Number.isNaN(+num) || +num < 1 || +num > 9) err = true;
  });
  return err;
}

function checkError(query) {
  if (hasError(query)) throw new Error('사용자 인풋 에러');
}
exports.randomGenerator = randomGenerator;
exports.checkError = checkError;
exports.isFinish = isFinish;
exports.printFeedback = printFeedback;
exports.getScore = getScore;
exports.hasError = hasError;
