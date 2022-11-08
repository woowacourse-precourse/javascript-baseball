const { Random } = require("@woowacourse/mission-utils");

function generateComputerAnswer() {
  const LENGTH = 3;
  const START_INCLUSIVE = 1;
  const END_INCLUSIVE = 9;
  const computerAnswer = [];

  while (computerAnswer.length < LENGTH) {
    const number = Random.pickNumberInRange(START_INCLUSIVE, END_INCLUSIVE);
    if (!computerAnswer.includes(number)) computerAnswer.push(number);
  }

  return computerAnswer;
}

module.exports = generateComputerAnswer;
