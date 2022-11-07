const MissionUtils = require("@woowacourse/mission-utils");

const makeAnswer = () => {
  const answer = [];
  while (answer.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!isOverlap(answer, randomNumber)) {
      answer.push(randomNumber);
    }
  }
  return answer;
};

const isOverlap = (arr, num) => {
  if (arr.includes(num)) return true;
  else return false;
};
module.exports = makeAnswer;
