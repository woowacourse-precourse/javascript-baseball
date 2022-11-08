function checkInputNumber1To9(input) {
  const numberRegex = /^[1-9]+$/;
  const isInputNumber = numberRegex.test(input);
  return isInputNumber;
}

function checkNumberLength(number, limitLength) {
  const stringNumber = String(number);
  return stringNumber.length === limitLength;
}

function checkNumberDuplication(number) {
  const numberSet = new Set([...number]);
  const stringNumber = String(number);
  return numberSet.size === stringNumber.length;
}

function convertNumberToStringArray(number) {
  return String(number).split('');
}

function checkIsIndexSame(answerIndex, userNumberIndex) {
  return answerIndex === userNumberIndex;
}

function getMatchCount(answerArray, userNumberArray) {
  const result = {
    strike: 0,
    ball: 0,
  };
  userNumberArray.forEach((number, userNumberIndex) => {
    const answerIndex = answerArray.indexOf(number);
    const isUserNumberInAnswer = answerIndex !== -1;
    const hasSameIndex = checkIsIndexSame(answerIndex, userNumberIndex);
    if (hasSameIndex) result.strike += 1;
    if (isUserNumberInAnswer && !hasSameIndex) result.ball += 1;
  });

  return result;
}

function sendErrorMessage(string) {
  throw new Error(`⚠️  ${string}!`);
}

module.exports = {
  checkInputNumber1To9,
  checkNumberDuplication,
  checkNumberLength,
  convertNumberToStringArray,
  getMatchCount,
  sendErrorMessage,
};
