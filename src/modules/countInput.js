const GAME_NUMBER_LENGTH = 3;

const countInput = (computerInput, userInput) => {
  let BALLS = 0;
  let STRIKES = 0;
  for (let idx = 0; idx < GAME_NUMBER_LENGTH; idx++) {
    if (computerInput[idx] === userInput[idx]) STRIKES++;
    else if (computerInput.includes(userInput[idx])) BALLS++;
  }

  let countArr = [BALLS, STRIKES];
  return countArr;
};

module.exports = countInput;
