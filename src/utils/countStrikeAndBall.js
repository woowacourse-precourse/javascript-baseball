const { RESULT } = require("../constant/constants");
const { NUMBER_COUNT } = require("../constant/constants");

const countStrikeAndBall = (answer, input) => {
  //return을 적절하게 적용한다! //어떻게 짤 것인가!?!??1
  const result = {
    strike: 0,
    ball: 0,
  };
  const randomAnswer = answer.split("");
  const playerInput = input.split("");
  for (
    let randomAnswerIndex = 0;
    randomAnswerIndex < NUMBER_COUNT;
    randomAnswerIndex++
  ) {
    for (
      let playerInputIndex = 0;
      playerInputIndex < NUMBER_COUNT;
      playerInputIndex++
    ) {
      if (randomAnswer[randomAnswerIndex] === playerInput[playerInputIndex]) {
        if (randomAnswerIndex === playerInputIndex) result.strike++;
        else result.ball++;
      }
    }
  }
  return result;
};

module.exports = {
  countStrikeAndBall,
};
