function isNumInRange(str) {
  const regExp = /[1-9]/g;
  const matchArr = str.match(regExp);
  return matchArr.length === str.length;
}

function isLengthEqualsThree(str) {
  return str.length === 3;
}

function isAllDifferent(str) {
  const inputNumSet = new Set(str.split(''));
  return inputNumSet.size === str.length;
}

function isInputValidate(str) {
  if (!isLengthEqualsThree(str)) return false;
  if (!isAllDifferent(str)) return false;
  if (!isNumInRange(str)) return false;

  return true;
}

module.exports = isInputValidate;
