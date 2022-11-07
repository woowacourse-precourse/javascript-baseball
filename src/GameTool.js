const { Random } = require('@woowacourse/mission-utils');

const generateRandomNumber = () => {
  return Random.pickUniqueNumbersInRange(1, 9, 3);
}

const gameTool = {
  generateRandomNumber
}

module.exports = gameTool;