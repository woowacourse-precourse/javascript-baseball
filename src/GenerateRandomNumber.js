const { Random } = require("@woowacourse/mission-utils");
const { MIN, MAX, CONDITION_UNIT } = require("./constants/constants");

const GenerateRandomNumber = (cars, count) => {
  let result = [];
  for (let i = 0; i < count; i++) {
    let temp = [];
    for (let j = 0; j < cars; j++) {
      temp.push(Random.pickNumberInRange(MIN, MAX) >= CONDITION_UNIT ? 1 : 0);
    }
    result.push(temp);
  }
  return result;
};

module.exports = GenerateRandomNumber;
