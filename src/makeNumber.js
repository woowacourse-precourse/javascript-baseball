const MissionUtils = require("@woowacourse/mission-utils");

const makeAnswer = () => {
  const answer = [];
  return answer;
};

const isOverlap = (arr, num) => {
  if (arr.includes(num)) return true;
  else return false;
};
module.exports = makeAnswer;
