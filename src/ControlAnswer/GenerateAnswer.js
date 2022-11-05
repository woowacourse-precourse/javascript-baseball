const MissionUtils = require('@woowacourse/mission-utils');
const { ANSWER } = require('../Constants');

const generateAnswer = () => {
  const answerArr = [];

  while (answerArr.length < ANSWER.LENGTH) {
    const number = MissionUtils.Random.pickNumberInRange(
      ANSWER.MIN,
      ANSWER.MAX
    );
    if (!answerArr.includes(number)) {
      answerArr.push(number);
    }
  }

  return answerArr;
};

module.exports = { generateAnswer };
