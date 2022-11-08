const { GAME_RULE } = require("../constants");

const getStrikeBallCount = (computerInput, userInput) => {
  computerInputToArray = [...computerInput];
  userInputToArray = [...userInput];

  let strikeCount = 0;
  let ballCount = 0;

  for (let i = 0; i < GAME_RULE.LENGTH; i++) {
    if (computerInputToArray[i] === userInputToArray[i]) {
      strikeCount++;
    }
  }

  for (let eachLetter of userInput) {
    if (computerInput.includes(eachLetter)) {
      ballCount++;
    }
  }

  ballCount -= strikeCount;

  return [strikeCount, ballCount];
};

module.exports = getStrikeBallCount;
