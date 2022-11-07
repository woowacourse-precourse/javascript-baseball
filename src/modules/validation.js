const { GAME } = require("./constants");

const validateThreeFigures = (userInput) => {
  // 'asd' '1234' '122'
  const regex = /[^1-9]/g;
  if (userInput.length !== GAME.LENGTH) {
    // 3자리가 아닌경우 asdf 1234
    return false;
  } else if (new Set(userInput).size !== GAME.LENGTH) {
    // 중복숫자가있는경우 113
    return false;
  } else if (regex.test(userInput)) {
    // 숫자가아닌 문자열이 있는 경우
    return false;
  } else {
    return true;
  }
};

const validateNextAction = (userInput) => {
  if (userInput === GAME.RESTART || userInput === GAME.QUIT) {
    return true;
  } else {
    return false;
  }
}

module.exports = { validateThreeFigures, validateNextAction };