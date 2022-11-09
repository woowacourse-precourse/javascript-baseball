const { Random } = require('@woowacourse/mission-utils');
const { ANSWER_LENGTH } = require('../constants/constants');

const makeRandomNumber = () => {
  const answer = [];

  while (answer.length < ANSWER_LENGTH) {
    const tempNumber = Random.pickNumberInRange(1, 9);
    if (!answer.includes(tempNumber)) {
      answer.push(tempNumber);
    }
  }

  return answer.join(''); // 3자리 수를 만들어 string 형태로 리턴
};

module.exports = makeRandomNumber;
