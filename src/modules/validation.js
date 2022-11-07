const validateThreeFigures = (userInput) => {
  // 'asd' '1234' '122'
  const regex = /[^1-9]/g;
  if (userInput.length !== 3) {
    // 3자리가 아닌경우 asdf 1234
    return false;
  } else if (new Set(userInput).size !== 3) {
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
  if (!userInput === '1' || !userInput === '2') {
    return false;
  } else {
    return true;
  }
}

module.exports = { validateThreeFigures, validateNextAction };