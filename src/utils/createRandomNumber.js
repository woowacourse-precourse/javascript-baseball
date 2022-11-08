const { Random } = require("@woowacourse/mission-utils");
const { RANDOM } = require("../constants/constants");

const createRandomNumber = () => {
  const { START_INCLUSIVE, END_INCLUSIVE, NUMBER_LENGTH } = RANDOM;
  const answer = [];

  answer.push(Random.pickNumberInRange(START_INCLUSIVE, END_INCLUSIVE));
  while (answer.length < NUMBER_LENGTH) {
    const randomResult = Random.pickNumberInRange(1, 9);
    if (!answer.includes(randomResult)) {
      answer.push(randomResult);
    }
  }

  return answer;
};

module.exports = createRandomNumber;
