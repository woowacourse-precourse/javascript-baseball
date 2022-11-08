const { Random } = require("@woowacourse/mission-utils");
const { Console } = require("@woowacourse/mission-utils");

const print = (string) => Console.print(string);

const generateRandomNumber = () => {
  const computerNumber = [];
  while (computerNumber.length < 3) {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (!computerNumber.includes(randomNumber)) {
      computerNumber.push(randomNumber);
    }
  }
  return computerNumber;
};

module.exports = {generateRandomNumber, print};
