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
      // 맞는 자리수가 있을 때
      if (userInput[userInputIndex] === answerInput[answerInputIndex]) {
        // 같은 자리수면 스트라이크 ++
        if (userInputIndex === answerInputIndex) result.strike++;
        // 다른 자리수면 볼 ++
        else if (userInputIndex !== answerInputIndex) result.ball++;
      }
    }
  }

  return result;
};

module.exports = countBallAndStrike;
