const { ANSWER_LENGTH } = require("../constants/constants");

function countBallAndStrike(userInput, answer) {
  const result = {
    ball: 0,
    strike: 0,
  };

  for (let i = 0; i < ANSWER_LENGTH; i++) {
    if (answer.findIndex((v) => v === Number(userInput[i])) === i) {
      result.strike += 1;
    } else if (answer.findIndex((v) => v === Number(userInput[i])) > -1) {
      result.ball += 1;
    }
  }

  return result;
}

module.exports = countBallAndStrike;
