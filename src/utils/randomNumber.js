const { Random } = require("@woowacourse/mission-utils");
const { NUMBER_COUNT } = require("../constant/constants");

console.log("hello");
//randomNumber을 생성해서 return 하는 방식을 취한다!
const createRandomNumber = () => {
  const RandomNumber = [];
  while (RandomNumber.length < NUMBER_COUNT) {
    const generateRandomNumber = Random.pickNumberInRange(1, 9);
    if (RandomNumber.length === 0) RandomNumber.push(generateRandomNumber);
    else if (!RandomNumber.includes(generateRandomNumber))
      RandomNumber.push(generateRandomNumber);
  }
  return RandomNumber.join("");
};
module.exports = { createRandomNumber };
