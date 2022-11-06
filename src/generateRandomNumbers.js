const { Random } = require('@woowacourse/mission-utils');

function generateRandomNumbers(gameData) {
  const generatedRandomNumbers = [];
  while (generatedRandomNumbers.length < 3) {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (!generatedRandomNumbers.includes(randomNumber)) {
      generatedRandomNumbers.push(randomNumber);
    }
  }
  gameData.setComputerRandomNumbers(generatedRandomNumbers);
  return gameData;
}

exports.generateRandomNumbers = generateRandomNumbers;
