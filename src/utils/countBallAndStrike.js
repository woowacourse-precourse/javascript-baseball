const { ANSWER_LENGTH } = require("../constants/constants");

const countBallAndStrike = (userInput, answerInput) => {
  const result = {
    strike: 0,
    ball: 0,
  };

  userInput = userInput.split("");
  answerInput = answerInput.split("");

  for (let userInputIndex = 0; userInputIndex < ANSWER_LENGTH; userInputIndex++) {
    for (let answerInputIndex = 0; answerInputIndex < ANSWER_LENGTH; answerInputIndex++) {
      if (
        userInput[userInputIndex] === answerInput[answerInputIndex] &&
        userInputIndex === answerInputIndex
      )
        result.strike++; // 같은 자리수면 스트라이크 ++
      else if (
        userInput[userInputIndex] === answerInput[answerInputIndex] &&
        userInputIndex !== answerInputIndex
      )
        result.ball++; // 다른 자리수면 볼 ++
    }
  }

  return result;
};

module.exports = countBallAndStrike;
